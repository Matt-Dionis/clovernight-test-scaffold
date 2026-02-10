import './globals.css'

export const metadata = {
  title: 'Weather Dashboard',
  description: 'Dark-themed weather dashboard with 7-day forecast'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
