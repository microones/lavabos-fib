-- Comptes creats per un admin amb contrasenya provisional: s'ha de canviar en entrar.
ALTER TABLE "User" ADD COLUMN "mustChangePassword" BOOLEAN NOT NULL DEFAULT false;
