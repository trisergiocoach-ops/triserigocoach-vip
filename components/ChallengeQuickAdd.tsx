"use client";
import { supabase } from "../lib/supabaseClient"; // <-- relativo
import { useState } from "react";

const RULES = [
  { code: "force", label: "Fuerza (+10)" },
  { code: "cardio", label: "Cardio (+8)" },
  { code: "mobility", label: "Movilidad (+5)" },
  { code: "reto_5x5", label: "Reto 5x5 (+10)" }
];

export default function ChallengeQuickAdd() {
  const [busy, setBusy] = useState<string | null>(null);
  const add = async (code: string) => {
    setBusy(code);
    const today = new Date().toISOString().slice(0,10);
    const { error } = await supabase.rpc("add_activity", { p_rule_code: code, p_date: today });
    setBusy(null);
    if (error) alert(error.message);
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {RULES.map(r => (
        <button key={r.code} disabled={busy===r.code} onClick={() => add(r.code)}>
          {busy===r.code ? "Guardando..." : r.label}
        </button>
      ))}
    </div>
  );
}
