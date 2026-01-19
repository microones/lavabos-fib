import { LogoutButton } from "@/components/logout-button";
import { getUser } from "@/lib/server/auth";
import { redirect } from "next/navigation";
import Link from "next/link"

export default async function AdminPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const items = [
    { href: "/admin/frases", label: "Frases" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 space-y-8">
      <p className="text-xl text-center">
        Benvingut, <strong>{user.username}</strong> ({user.email})
      </p>
      <p className="text-m text-center">Rol: {user.admin ? "Administrador" : "Usuari estàndard"}</p>
      <div className="grid grid-cols-1 sm:grid-cols gap-6 mt-4">
        {items.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="bg-white shadow-md hover:shadow-xl rounded-none p-6 text-center text-lg font-semibold transition-all duration-200 flex items-center justify-center"
          >
            <span>{label}</span>
          </Link>
        ))}

        
      </div>

      <form action={async () => {
        "use server";
      }}>
        <LogoutButton></LogoutButton>
      </form>
    </main>
  )
}