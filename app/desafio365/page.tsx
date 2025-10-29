import RequireAuth from "@/components/RequireAuth";
import ChallengeQuickAdd from "@/components/ChallengeQuickAdd";
import Leaderboard from "@/components/Leaderboard";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <RequireAuth>
      <main>
        <h2>DESAFIO365</h2>
        <p>Suma puntos con un click y revisa el ranking del mes.</p>
        <ChallengeQuickAdd />
        <h3 style={{ marginTop: 24 }}>Ranking mensual</h3>
        <Leaderboard />
      </main>
    </RequireAuth>
  );
}
