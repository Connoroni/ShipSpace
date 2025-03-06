import styles from "./header.module.css";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Link href="/">
          <h1>SHIP SPACE</h1>
        </Link>
        <div>
          <SignedIn>
            <div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className={styles.clerkButtons}>
              <SignInButton />
              <SignUpButton />
            </div>
          </SignedOut>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tags">Tags</Link>
        <Link href="/all-ships">Space Ships</Link>
        <Link href="/new-article">Create Article</Link>
      </nav>
    </header>
  );
}
