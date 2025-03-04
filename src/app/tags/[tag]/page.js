import { db } from "@/utils/dbConnectionString";
import Link from "next/link";

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
  console.log(tagData);
  return (
    <>
      <h1>{tagData[0].tag_name} Ships</h1>
      <div>
        <ul>
          {tagData.map((article) => (
            <li key={article.title}>
              &bull;&nbsp;
              <Link href={`/article/${article.title}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
