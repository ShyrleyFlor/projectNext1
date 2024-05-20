import Link from "next/link";
export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link href="/">Volver</Link>
        </div>
    );
}