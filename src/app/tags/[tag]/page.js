import { db } from "@/utils/dbConnectionString";
import Link from "next/link";
import styles from "../tags.module.css";

export default async function TagPage({ params }) {
  const tagParams = await params;
  console.log("Tag params:", tagParams);
  const tagData = (
    await db.query(
      `SELECT articles.title, tags.tag_name FROM articles
        JOIN tag_junction ON articles.title = tag_junction.article_title
        JOIN tags ON tag_junction.tag_id = tags.id
        WHERE tags.id = $1`,
      [tagParams.tag]
    )
  ).rows;
  //   console.log(tagData);
  return (
    <>
      <section className={styles.fullPage}>
        <h1 className={styles.title}>{tagData[0].tag_name} Ships</h1>
        <div className={styles.tagDiv}>
          <ul className={styles.allTags}>
            {tagData.map((article) => (
              <li key={article.title}>
                &bull;&nbsp;
                <Link href={`/article/${article.title}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
