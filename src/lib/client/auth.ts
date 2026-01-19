import 'client-only'

import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
    // baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()

export function getUser() {
    const { data: session } = useSession()
    if (!session) return null
    return session.user
}
