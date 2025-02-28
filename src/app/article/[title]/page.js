import { db } from "@/utils/dbConnectionString";
import Image from "next/image";
import InfoBox from "@/app/components/InfoBox";
import styles from "./article.module.css";

export default async function ArticlePage({ params }) {
  const titleParams = await params;
  const pageData = (
    await db.query(`SELECT * FROM articles WHERE title = $1`, [
      titleParams.title,
    ])
  ).rows;
  console.log(pageData);

  return (
    <>
      {pageData.map((article) => (
        <section className={styles.fullPage} key={article.id}>
          <div className={styles.topDiv}>
            <h1 className={styles.title}>{article.title}</h1>
            <p>{article.intro}</p>
          </div>
          {/* <InfoBox /> */}
          <section className={styles.mainContent}>
            <div className={styles.contentDiv}>
              {article?.sub1 ? (
                <h2 className={styles.subheading}>{article?.sub1}</h2>
              ) : null}
              {article?.content1 ? (
                <p className={styles.textContent}>{article?.content1}</p>
              ) : null}
              {article?.img1 ? (
                <Image
                  src={article?.img1}
                  alt="This is a user submitted image without alt text, I should alter the table later to enable alt text."
                  height={200}
                  width={200}
                />
              ) : null}
            </div>
            <div className={styles.contentDiv}>
              {article?.sub2 ? (
                <h2 className={styles.subheading}>{article?.sub2}</h2>
              ) : null}
              {article?.content2 ? (
                <p className={styles.textContent}>{article?.content2}</p>
              ) : null}
              {article?.img2 ? (
                <Image
                  src={article?.img2}
                  alt="This is a user submitted image without alt text, I should alter the table later to enable alt text."
                  height={200}
                  width={200}
                />
              ) : null}
            </div>
            <div className={styles.contentDiv}>
              {article?.sub3 ? (
                <h2 className={styles.subheading}>{article?.sub3}</h2>
              ) : null}
              {article?.content3 ? (
                <p className={styles.textContent}>{article?.content3}</p>
              ) : null}
              {article?.img3 ? (
                <Image
                  src={article?.img3}
                  alt="This is a user submitted image without alt text, I should alter the table later to enable alt text."
                  height={200}
                  width={200}
                />
              ) : null}
            </div>
          </section>
        </section>
      ))}
    </>
  );
}
