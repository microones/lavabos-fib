"use client";
import { useState } from "react";
import { authClient } from "@/lib/client/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error: resError } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/admin", 
    });

    if (resError) {
      setError(resError.message || "Error en crear el compte");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '50px auto' }}>
      <h1>Crear Compte</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Nom complet" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Correu electrònic" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contrasenya (mín. 8 caràcters)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Registrar-se</button>
      </form>

      <p style={{ fontSize: '0.9rem' }}>
        Ja tens compte? <a href="/login">Inicia sessió</a>
      </p>
    </div>
  );
}