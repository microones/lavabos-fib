import Link from "next/link";

export default function Page() {
    return (
        <main className="p-6">
            <h1 className="font-bold text-2xl">Lavabos FIB - Cercador</h1>
            
            <Link href="/" className="text-blue-600 underline">Tornar a l'inici</Link>

            <form action="/action_page.php">

                
                <label htmlFor="paraula_clau">Paraula clau</label><br/>
                <input id="paraula_clau" type="text" name="paraula_clau"/> <br/>
                <label htmlFor="edifici">Edifici</label><br/>
                <input id="edifici" type="text" name="edifici"/> <br/>
                <label htmlFor="planta">Planta</label><br/>
                <input id="planta" type="text" name="planta"/> <br/>
                <label htmlFor="sexe">Sexe</label><br/>
                <input id="sexe" type="text" name="sexe"/> <br/>
                
                <input type="submit" value="Submit"/>

            </form>
        </main>
    );
}