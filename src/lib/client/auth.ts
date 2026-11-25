import 'client-only'

import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
    // baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = authClient

/** Hook: l'usuari de la sessió actual (o null). */
export function useUser() {
    const { data: session } = useSession()
    return session?.user ?? null
}
