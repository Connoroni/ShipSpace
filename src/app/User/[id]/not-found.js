import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Oops, this user seems to be lost on space.</p>
            <Link href="/">Return to the homepage</Link>
        </div>
    )
}