import { getUser } from "@/lib/server/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await getUser();

  // Seguretat extra a nivell de servidor
  if (!user) {
    redirect("/login");
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Panell d'Administració</h1>
      <p>Benvingut, <strong>{user.username}</strong> ({user.email})</p>
      <p>Rol: {user.admin ? "Administrador" : "Usuari estàndard"}</p>
      
      <form action={async () => {
        "use server";
        // Aquí podries implementar el logout o fer-ho via client
      }}>
        <button>Sortir (Logout)</button>
      </form>
    </div>
  );
}