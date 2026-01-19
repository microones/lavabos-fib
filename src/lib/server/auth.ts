import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../db";
import { headers } from "next/headers";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: { enabled: true },
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    user: {
        additionalFields: {
            username: {
                type: 'string',
                required: false,
            },
            admin: {
                type: 'boolean',
                required: false,
                defaultValue: false,
                input: false, // don't allow user to set role
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
});

export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.user

export async function getUser(): Promise<User | null> {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session) return null
    return session.user
}

export async function getUserOrThrow({ admin = false } = {}): Promise<User> {
    const user = await getUser()
    if (!user) throw new Error('Unauthorized')
    if (admin && !user.admin) throw new Error('Admin access required')
    return user
}