# Lavabos FIB

Frases cèlebres dels lavabos de la FIB, ressenyes de lavabos i més!

Projecte (a mitjà termini) de la HackUPC 2024, 2025 i estones lliures per practicar desenvolupament web.

*Estat: En desenvolupament.*

##  Requisits previs

Per fer funcionar aquest projecte localment necessitaràs tenir instal·lat **Node.js** o **Bun**.

Si prefereixes utilitzar Bun (recomanat) i no el tens instal·lat, pots fer-ho executant la següent comanda al teu terminal:

```bash
curl -fsSL [https://bun.sh/install](https://bun.sh/install) | bash
```

##  Configuració de l'entorn de treball

Segueix aquests passos per configurar l'entorn de desenvolupament local:

### 1. Instal·lar les dependències

Clona el repositori i, des de l'arrel del projecte, instal·la totes les dependències necessàries (Next.js, Prisma, etc.):

```bash
bun install
```

### 2. Configurar la base de dades (SQLite local)

Per a l'entorn de desenvolupament utilitzarem una base de dades SQLite local.

Primer, crea l'arxiu físic de la base de dades dins de la carpeta de Prisma:
```bash
touch ./prisma/lavabos.db
```

Després, crea un fitxer `.env` a l'arrel del projecte amb la variable d'entorn necessària perquè Prisma es pugui connectar:
```bash
echo 'DATABASE_URL="file:./prisma/lavabos.db"' > .env
```

### 3. Inicialitzar Prisma

Aplica les migracions per crear l'esquema de la base de dades i genera el client de Prisma:

```bash
bun prisma migrate dev --name init
bun prisma generate
```

## Executar el projecte

Un cop configurat l'entorn de treball i la base de dades, ja pots iniciar el servidor de desenvolupament de Next.js:

```bash
bun run dev
```

Obre [http://localhost:3000](http://localhost:3000) al teu navegador web per veure l'aplicació en funcionament.

##  Scripts disponibles

Dins del fitxer `package.json` hi ha definits els següents scripts que pots executar amb `bun run <nom_script>` (o `npm run`):

- `dev`: Inicia el servidor de desenvolupament (Next.js).
- `build`: Genera la versió de producció de l'aplicació.
- `start`: Inicia el servidor de producció (requereix haver executat `build` prèviament).
- `lint`: Executa ESLint per trobar possibles problemes o errors de format al codi.

##  Tecnologies principals

Aquest projecte està construït amb:
- **Next.js**
- **React** 
- **Prisma** 
- **Tailwind CSS** 
- **Better Auth** 