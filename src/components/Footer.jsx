import styles from "./footer.module.css";
import Link from "next/link";

import { twitter } from "@/../public/assets/twitter";
import { github } from "@/../public/assets/github";
import { instagram } from "@/../public/assets/instagram";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <aside className={styles.aside}>
        <h1>Ship Space</h1>
        <p>The home of your favourite spaceships.</p>
      </aside>
      <nav className={styles.nav}>
        <h6 className={styles.footerTitle}>The Website</h6>
        <Link href="#" className={styles.link}>
          About Us
        </Link>
      </nav>
      <nav className={styles.nav}>
        <h6 className={styles.footerTitle}>Social Media</h6>
        <Link href="https://bsky.app/" className={styles.link}>
          <div className={styles.social}>
            {twitter} <p>&nbsp;Twitter</p>
          </div>
        </Link>
        <Link href="https://www.instagram.com/" className={styles.link}>
          <div className={styles.social}>
            {instagram} <p>&nbsp;Instagram</p>
          </div>
        </Link>
        <Link
          href="https://github.com/Connoroni/Starship-Hub"
          className={styles.link}
        >
          <div className={styles.social}>
            {github} <p>&nbsp;Github</p>
          </div>
        </Link>
      </nav>
    </footer>
  );
}
