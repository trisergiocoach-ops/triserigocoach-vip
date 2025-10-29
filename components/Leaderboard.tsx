"use client";
import { supabase } from "../lib/supabaseClient"; // <-- relativo
import { useEffect, useState } from "react";

type Row = { user_id: string; points: number; rank_name: string | null };

export default function Leaderboard() {
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    const month = new Date(); month.setDate(1);
    supabase.rpc("leaderboard_month", { p_month: month.toISOString().slice(0,10) })
      .then(({ data, error }) => { if (error) alert(error.message); else setRows(data || []); });
  }, []);
  if (!rows.length) return <p>Todavia no hay puntos este mes.</p>;
  return (
    <table>
      <thead><tr><th>#</th><th>Puntos</th><th>Rango</th><th>User</th></tr></thead>
      <tbody>
        {rows.map((r,i)=>(
          <tr key={r.user_id}>
            <td>{i+1}</td><td>{r.points}</td><td>{r.rank_name ?? "-"}</td><td>{r.user_id.slice(0,8)}...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
