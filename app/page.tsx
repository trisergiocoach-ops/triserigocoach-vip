"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const sendLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: process.env.NEXT_PUBLIC_SITE_URL || undefined }
    });
    if (error) alert(error.message); else setSent(true);
  };

  return (
    <main>
      <h2>Bienvenido/a</h2>
      <p>Accede con tu email. Te enviaremos un enlace seguro.</p>
      {sent ? (
        <p>Enlace enviado a {email}. Revisa tu correo.</p>
      ) : (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            placeholder="tu@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{ padding: 8, minWidth: 260 }}
          />
          <button onClick={sendLink} style={{ padding: 8 }}>Enviar enlace</button>
        </div>
      )}
      <p style={{ marginTop: 16 }}><a href="/desafio365">Ir a Desafio365</a></p>
    </main>
  );
}
