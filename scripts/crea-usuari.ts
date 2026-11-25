// Crea un compte amb una contrasenya aleatòria que s'haurà de canviar en entrar per primer cop.
// Ús (al servidor, a /var/www/lavabos-fib):  bun run crea-usuari [--admin] correu@exemple.cat "Nom"
import { createUserWithTempPassword } from "../src/lib/server/usuaris";
import { prisma } from "../src/lib/db";

const args = process.argv.slice(2);
const admin = args[0] === "--admin";
const [email = "", ...nameParts] = admin ? args.slice(1) : args;

try {
  const { user, password } = await createUserWithTempPassword(email, nameParts.join(" "), admin);
  console.log(`Compte creat: ${user.email} (${user.name})${admin ? " · admin" : ""}`);
  console.log(`Contrasenya provisional: ${password}`);
  console.log("Entra a https://lavabos-fib.microones.cat/login i tria'n una de nova. No es tornarà a mostrar.");
} catch (e) {
  console.error((e as Error).message);
  console.error('Ús: bun run crea-usuari [--admin] correu@exemple.cat "Nom"');
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
