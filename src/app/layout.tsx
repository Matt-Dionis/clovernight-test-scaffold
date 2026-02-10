import "./globals.css";

export const metadata = {
  title: 'Weather Dashboard',
  description: 'A comprehensive weather dashboard with forecasts and metrics',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
