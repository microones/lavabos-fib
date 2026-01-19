"use client";

import { useState } from "react";
import { authClient } from "@/lib/client/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError("");

    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/admin",
    }, {
      onRequest: () => setPending(true),
      onError: (ctx) => {
        setPending(false);
        setError(ctx.error.message || "Credencials incorrectes");
      },
      onSuccess: () => {
        setPending(false);
        router.push("/admin");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8">
        
        {/* Capçalera */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">lavabos-fib admin</h2>
          <p className="mt-2 text-sm text-gray-600">
            la sala de neteja, la part més fosca dels lavabos
          </p>
        </div>

        {/* Missatge d'Error */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Formulari */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correu electrònic</label>
              <input
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
                placeholder="nom@domini.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contrasenya</label>
              <input
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
                placeholder="••••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={pending}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                pending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {pending ? "Iniciant sessió..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}