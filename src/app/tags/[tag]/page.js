import { db } from "@/utils/dbConnectionString";
import Link from "next/link";

export default async function TagPage({ params }) {
  const tagParams = await params;
  //     const tagData = (
  //         db query here to select all articles where the tag matches the tag from the params, using the junction table
  //     )
  return (
    <>
      <h1>PLACEHOLDER: Eventually there will be many articles linked here</h1>
    </>
  );
}
