import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center mb-4 mx-auto">About</h1>
            <p className="text-lg text-center">
                BD de lavabos de la FIB, per i per a FIBers.
            </p>
            <p className="text-lg text-center">
                En quin lavabo es caga millor? La comunitat respon.
            </p>

            <h2 className="text-2xl font-semibold text-center mt-8">
                Idea i desenvolupament
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12">
                {[
                    {
                        href: "https://github.com/microones/",
                        src: "/img/about/yeray-zalaya.jpeg",
                        alt: "Yeray Zalaya Domingo",
                        name: "Yeray Zalaya Domingo",
                        uni: "Universitat Politècnica de Catalunya",
                    },
                    {
                        href: "https://github.com/AuraHan5/",
                        src: "/img/about/aura-han.png",
                        alt: "Aura Han Ruiz Sánchez",
                        name: "Aura Han Ruiz Sánchez",
                        uni: "Universitat Politècnica de Catalunya",
                    },
                    {
                        href: "https://github.com/abeel987/",
                        src: "/img/about/abel-aymerich.png",
                        alt: "Abel Aymerich",
                        name: "Abel Aymerich",
                        uni: "Universitat Politècnica de Catalunya",
                    },
                ].map((dev) => (
                    <div key={dev.href} className="flex items-center space-x-4">
                        <Image
                            src={dev.src}
                            alt={dev.alt}
                            width={80}
                            height={80}
                            className="object-cover w-20 h-20"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-medium">{dev.name}</span>
                            <span className="text-sm text-gray-500">{dev.uni}</span>
                            <Link href={dev.href} className="text-sm text-blue-500 hover:underline">
                                GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div></div>

            <p className="text-lg text-center">
                Suggeriments i aportacions a{" "}
                <a
                    href="mailto:lavabos-fib@microones.cat"
                    className="text-blue-500 underline"
                >
                    lavabos-fib@microones.cat
                </a>
            </p>

            <p className="text-lg text-center">
                Fet amb 💩 i 🧻 pels passadissos de l'A5 durant la HackUPC 2025.
            </p>

            <p className="text-lg text-center">
                Codi font disponible en el {" "}
                <a
                    href="https://github.com/microones/lavabos-fib"
                    className="text-blue-500 underline"
                >
                    repositori del projecte
                </a>
                .
            </p>
        </main>
    );
}