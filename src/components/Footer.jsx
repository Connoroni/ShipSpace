import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <aside className={styles.aside}>
        <h1>WEBSITE TITLE</h1>
        <p>The home of your favourite spaceships.</p>
      </aside>
      <nav className={styles.nav}>
        <h6 className={styles.footerTitle}>The Website</h6>
        <Link href="#" className={styles.link}>
          Branding
        </Link>
        <Link href="#" className={styles.link}>
          Design
        </Link>
        <Link href="#" className={styles.link}>
          Marketing
        </Link>
        <Link href="#" className={styles.link}>
          Advertisement
        </Link>
      </nav>
      <nav className={styles.nav}>
        <h6 className={styles.footerTitle}>Company</h6>
        <Link href="#" className={styles.link}>
          About us
        </Link>
        <Link href="#" className={styles.link}>
          Contact
        </Link>
        <Link href="#" className={styles.link}>
          Jobs
        </Link>
        <Link href="#" className={styles.link}>
          Press kit
        </Link>
      </nav>
      <nav className={styles.nav}>
        <h6 className={styles.footerTitle}>Legal</h6>
        <Link href="#" className={styles.link}>
          Terms of use
        </Link>
        <Link href="#" className={styles.link}>
          Privacy policy
        </Link>
        <Link href="#" className={styles.link}>
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
}
