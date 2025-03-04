import { db } from "@/utils/dbConnectionString";
import Link from "next/link";

export default async function Tags() {
  const tagList = (await db.query(`SELECT * FROM tags`)).rows;

  return (
    <>
      <h1>Tags</h1>
      <div>
        <ul>
          {tagList.map((tag) => (
            <li key={tag.id}>
              &bull;&nbsp;<Link href="#">{tag.tag_name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
