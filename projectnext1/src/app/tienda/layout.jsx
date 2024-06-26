import Link from "next/link";

export const metadata = {
  title: "Tienda",
}
export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h2>SECCION TIENDA</h2>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link></li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
