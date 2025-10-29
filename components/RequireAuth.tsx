"use client";
import { supabase } from "../lib/supabaseClient"; // <-- relativo
import { useEffect, useState } from "react";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, sess) => setSession(sess));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <p>Cargando...</p>;
  if (!session) return <p>No has iniciado sesion. <a href="/">Volver</a></p>;
  return <>{children}</>;
}
