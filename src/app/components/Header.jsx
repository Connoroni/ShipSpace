import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Link href="/">
          <h1>WEBSITE TITLE</h1>
        </Link>
        <div className="CLERK-STUFF-HERE">
          <button>CLERK SIGN IN BUTTON</button>
          <button>CLERK SIGN OUT BUTTON</button>
          <button>CLERK USER</button>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/tags">Tags</Link>
        <Link href="/spaceships">Space Ships</Link>
        <Link href="#">anything else that might go in the header</Link>
      </nav>
    </header>
  );
}
