import "../globals.css";
import Navbar from "../components/Navbar";
import Header from "../components/Productos/ProductHeader";
export const metadata = {
  title: "Lexardi Studio",
  description: "Lexardi es un estudio de diseño, y más cosas...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        < Navbar />
        < Header />
        {children}

      </body>
    </html>
  );
}
