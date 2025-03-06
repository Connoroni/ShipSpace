import { db } from "@/utils/dbConnectionString";
import Link from "next/link";
import styles from "./tags.module.css";

export const metadata = {
  title: "Tags - Ship Space",
  description: "Tags for different ships in the database."
}

export default async function Tags() {
  const tagList = (await db.query(`SELECT * FROM tags`)).rows;

  return (
    <>
      <section className={styles.fullPage}>
        <h1 className={styles.title}>Tags</h1>
        <div className={styles.tagDiv}>
          <ul className={styles.allTags}>
            {tagList.map((tag) => (
              <li key={tag.id}>
                &bull;&nbsp;<Link href={`/tags/${tag.id}`}>{tag.tag_name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
