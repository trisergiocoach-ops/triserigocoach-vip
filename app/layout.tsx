export const metadata = { title: "TRISERGICOACH VIP", description: "App deportiva" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ maxWidth: 900, margin: "0 auto", padding: 16, fontFamily: "system-ui" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>TRISERGICOACH VIP</h1>
          <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/">Inicio</a>
            <a href="/desafio365">Desafio365</a>
            <a href="/perfil">Perfil</a>
            <a href="/calorias">Calorias</a>
            <a href="/admin">Admin</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
