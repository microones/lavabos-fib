import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "../db";
import { headers } from "next/headers";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // No es pot crear cap compte des de fora: els comptes els crea un admin (/admin o
    // scripts/crea-usuari.ts) amb una contrasenya provisional que s'ha de canviar en entrar.
    emailAndPassword: { enabled: true, disableSignUp: true, minPasswordLength: 10 },
    // Límit de peticions per IP (Better Auth només l'activa per defecte amb NODE_ENV=production);
    // l'inici de sessió en té un de més estricte. nginx passa la IP del visitant a X-Forwarded-For.
    rateLimit: { enabled: true },
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    user: {
        additionalFields: {
            username: {
                type: 'string',
                required: false,
                input: false,
            },
            admin: {
                type: 'boolean',
                required: false,
                defaultValue: false,
                input: false, // don't allow user to set role
            },
            // el posa crea-usuari / l'admin: cal triar una contrasenya nova abans de fer res
            mustChangePassword: {
                type: 'boolean',
                required: false,
                defaultValue: false,
                input: false,
            },
        },
    },
    databaseHooks: {  // to set username from email (joan.sabater@upc.edu -> @joan.sabater)
        user: {
            create: {
                before: async (user) => {
                    let baseUsername = `${user.email.split('@')[0]}`;

                    const exists = await prisma.user.findUnique({ where: { username: baseUsername } });
                    if (exists) baseUsername += Math.floor(Math.random() * 1000);

                    return {
                        data: {
                            ...user,
                            username: baseUsername,
                        },
                    };
                },
            },
        },
    },
    // perquè les server actions que criden auth.api puguin posar cookies (ha de ser l'últim)
    plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.user

export async function getUser(): Promise<User | null> {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session) return null
    return session.user
}

/**
 * L'usuari actual, o error si no n'hi ha. Un usuari amb contrasenya provisional no pot fer res
 * fins que la canviï (excepte canviar-la: `allowTempPassword`).
 */
export async function getUserOrThrow({ admin = false, allowTempPassword = false } = {}): Promise<User> {
    const user = await getUser()
    if (!user) throw new Error('Unauthorized')
    if (user.mustChangePassword && !allowTempPassword) throw new Error('Cal canviar la contrasenya')
    if (admin && !user.admin) throw new Error('Admin access required')
    return user
}
