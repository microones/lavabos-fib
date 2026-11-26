import { redirect } from "next/navigation";

// La pàgina principal és la galeria: és on hi ha el contingut.
export default function HomePage() {
  redirect("/imatges");
}
