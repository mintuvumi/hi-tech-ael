import "./globals.css";

export const metadata = {
  title: "Hi-Tech Automation & Engineering Ltd.",
  description: "Electrical automation, switchgear, transformer and substation solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}