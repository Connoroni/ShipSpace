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
          <h1>WEBSITE TITLE</h1>
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
        <Link href="#">About</Link>
        <Link href="#">Tags</Link>
        <Link href="#">Top Articles</Link>
        <Link href="#">anything else that might go in the header</Link>
      </nav>
    </header>
  );
}
