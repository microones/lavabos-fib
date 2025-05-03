export default function About() {
    return ( //TODO: acabar de fer la pagina d'about
        <main className="flex min-h-screen flex-col items-start justify-start p-8 space-y-4">
            <h1 className="text-6xl font-bold text-center">About</h1>
            <p className="text-lg text-center">
                This is a simple web application to manage the lavabos of the FIB.
                It is built with Next.js and Tailwind CSS.
            </p>
            <p className="text-lg text-center">
                Idea i desenvolupament per <a href="https://github.com/microones/">Yeray Zalaya Domingo</a>,
                <a href="https://github.com/microones/"></a>Aura Han Ruiz Sánchez i Abel Aymerich.
            </p>
            <p className="text-lg text-center">
                If you have any questions or suggestions, feel free to contact me.
            </p>
        </main>
    );
}