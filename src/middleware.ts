import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const USER = process.env.ADMIN_USER
const PASS = process.env.ADMIN_PASS

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  })
}

export function middleware(req: NextRequest) {
  // només protegem /admin i subrutes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization")
    if (!auth) return unauthorized()

    const [scheme, b64] = auth.split(" ")
    if (scheme !== "Basic" || !b64) return unauthorized()

    let decoded: string
    try {
      // en Edge runtime atob() existeix
      decoded = atob(b64)
    } catch {
      return unauthorized()
    }
    const [u, p] = decoded.split(":")
    if (u !== USER || p !== PASS) return unauthorized()
  }
  return NextResponse.next()
}

// apliquem només a /admin i subrutes
export const config = {
  matcher: ["/admin/:path*"],
}