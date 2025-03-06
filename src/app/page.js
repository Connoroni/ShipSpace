import Image from "next/image";
import styles from "./home.module.css";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Galactic Starship Database</h1>
                <p className={styles.subtitle}>Explore and upload starships from across the multiverse</p>
            </header>

            <main className={styles.mainPanel}>
                <section className={styles.infoCard}>
                    <h2>Featured Starship</h2>
                    <p>Discover iconic vessels from your favorite universes.</p>
                </section>

                <section className={styles.controls}>
                    <button className={styles.uploadButton}>Upload Starship</button>
                    <button className={styles.exploreButton}>Explore Database</button>
                </section>
            </main>
        </div>
    );
}