import "../globals.css";



export const metadata = {
  title: "Lexardi Studio",
  description: "Lexardi es un estudio de diseño, y más cosas...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
