import { db } from "@/utils/dbConnectionString";
import Link from "next/link";
import Image from "next/image";

export default async function AllShips() {
  const shipList = (await db.query(`SELECT * FROM articles ORDER BY title`))
    .rows;

  return (
    <>
      <ul>
        {shipList.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.title}`}>{article.title}</Link>
            {article.img1 ? (
              <Image
                src={article.img1}
                alt={article.alt1}
                width={100}
                height={100}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
