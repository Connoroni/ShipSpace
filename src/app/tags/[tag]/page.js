import { db } from "@/utils/dbConnectionString";
import Link from "next/link";
import styles from "../tags.module.css";

export async function generateMetadata({ params }) {
  const tagsParams = await params;
  const pageData = await db.query(`Select * from tags WHERE tag_name= $1`, [
    tagsParams.tagname,
  ]);
  return {
    title: `${pageData.tagname} - Ship Space`,
    description: `${pageData.tagname} ships.`,
  };
}

export default async function TagPage({ params }) {
  const tagParams = await params;
  //   console.log("Tag params:", tagParams);
  const tagName = (
    await db.query(`SELECT * FROM tags WHERE id = $1`, [tagParams.tag])
  ).rows;
  //   console.log("Tag name:", tagName);
  const tagData = (
    await db.query(
      `SELECT articles.title, tags.tag_name FROM articles
        JOIN tag_junction ON articles.title = tag_junction.article_title
        JOIN tags ON tag_junction.tag_id = tags.id
        WHERE tags.id = $1
        ORDER BY articles.title`,
      [tagParams.tag]
    )
  ).rows;

  //   console.log(tagData);
  return (
    <>
      <section className={styles.fullPage}>
        <h1 className={styles.title}>{tagName[0].tag_name} Ships</h1>

        {tagData.length > 0 ? (
          <div className={styles.tagDiv}>
            <ul className={styles.allTags}>
              {tagData.map((article) => (
                <li key={article.title}>
                  &bull;&nbsp;
                  <Link href={`/article/${article.title}`}>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.noTagsDiv}>
            <p>
              There are currently no article featuring this tag. Do you want to
              make one?
            </p>
            <Link href="/new-article">Create an article</Link>
            <Link href="/tags">View all tags</Link>
            <Link href="/">Go home</Link>
          </div>
        )}
      </section>
    </>
  );
}
