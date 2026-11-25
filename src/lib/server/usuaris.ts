import { auth } from "./auth";

// Gestió de comptes, compartida pel panell /admin i scripts/crea-usuari.ts.

/** 16 caràcters sense els que es confonen (0/O, 1/l/I), en grups de 4 perquè es llegeixi bé. */
export function randomPassword(): string {
  const ALPHABET = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint32Array(16));
  return Array.from(bytes, (n) => ALPHABET[n % ALPHABET.length]).join("").replace(/(.{4})(?=.)/g, "$1-");
}

export const validEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 200;

/** Crea un compte amb una contrasenya aleatòria que s'haurà de canviar en entrar per primer cop. */
export async function createUserWithTempPassword(email: string, name = "", admin = false) {
  email = email.trim().toLowerCase();
  if (!validEmail(email)) throw new Error("El correu no és vàlid.");
  const ctx = await auth.$context;
  if (await ctx.internalAdapter.findUserByEmail(email)) throw new Error(`Ja hi ha un compte amb el correu ${email}.`);
  const password = randomPassword();
  const user = await ctx.internalAdapter.createUser({
    email,
    name: name.trim().slice(0, 100) || email.split("@")[0] || email,
    emailVerified: false,
    mustChangePassword: true,
    admin,
  }, { method: "admin" });
  await ctx.internalAdapter.linkAccount({
    userId: user.id,
    providerId: "credential",
    accountId: user.id,
    password: await ctx.password.hash(password),
  });
  return { user, password };
}

/** Posa una contrasenya aleatòria nova, tanca totes les sessions i obliga a canviar-la. */
export async function resetPassword(userId: string) {
  const ctx = await auth.$context;
  const password = randomPassword();
  await ctx.internalAdapter.updatePassword(userId, await ctx.password.hash(password));
  await ctx.internalAdapter.updateUser(userId, { mustChangePassword: true });
  await ctx.internalAdapter.deleteUserSessions(userId);
  return password;
}
