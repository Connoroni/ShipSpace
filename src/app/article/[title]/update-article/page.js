import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Update article - Ship Space",
  description: "Update a Ship Space article.",
};

export default async function UpdateArticle({ params }) {
  const slug = await params;

  const oneArticle = await db.query(`SELECT * FROM articles WHERE title = $1`, [
    slug.title,
  ]);
  console.log(oneArticle);

  const wrangledArticle = oneArticle.rows[0];
  console.log(wrangledArticle);

  const infoData = (
    await db.query(`SELECT * FROM info_box WHERE article_title = $1`, [
      slug.title,
    ])
  ).rows[0];

  async function handleUpdate(formData) {
    "use server";

    // const title = formData.get("title");
    const intro = formData.get("intro");
    const sub1 = formData.get("sub1");
    const content1 = formData.get("content1");
    const img1 = formData.get("img1");
    const alt1 = formData.get("alt1");
    const sub2 = formData.get("sub2");
    const content2 = formData.get("content2");
    const img2 = formData.get("img2");
    const alt2 = formData.get("alt2");
    const sub3 = formData.get("sub3");
    const content3 = formData.get("content3");
    const img3 = formData.get("img3");
    const alt3 = formData.get("alt3");
    const image = formData.get("info_image");
    const alt = formData.get("info_alt");
    const name = formData.get("info_name");
    const origin = formData.get("info_origin");
    const info_length = formData.get("info_length");
    const length_unit = formData.get("length_unit");
    const width = formData.get("info_width");
    const width_unit = formData.get("width_unit");
    const height = formData.get("info_height");
    const height_unit = formData.get("height_unit");
    const role = formData.get("info_role");
    const weaponry = formData.get("info_weaponry");

    await db.query(
      `UPDATE articles SET intro = $1, sub1 = $2, content1 = $3, img1 = $4, alt1 = $5, sub2 = $6, content2 = $7, img2 = $8, alt2 = $9, sub3 = $10, content3 = $11, img3 = $12, alt3 = $13 WHERE title = $14`,
      [
        intro,
        sub1,
        content1,
        img1,
        alt1,
        sub2,
        content2,
        img2,
        alt2,
        sub3,
        content3,
        img3,
        alt3,
        slug.title,
      ]
    );

    await db.query(
      `UPDATE info_box SET image = $1, alt = $2, name = $3, origin = $4, length = $5, length_unit = $6, width = $7, width_unit = $8, height = $9, height_unit = $10, role = $11, weaponry = $12 WHERE article_title = $13
      `,
      [
        image,
        alt,
        name,
        origin,
        info_length,
        length_unit,
        width,
        width_unit,
        height,
        height_unit,
        role,
        weaponry,
        slug.title,
      ]
    );

    revalidatePath("/article");
    revalidatePath(`/article/${slug.title}`);
    redirect(`/article/${slug.title}`);
  }

  return (
    <>
      <h1>Update the article</h1>
      <p>Article: {slug.title}</p>
      <form action={handleUpdate}>
        {/* <label htmlFor="title">Shipname: </label>
                    <input type="text" 
                    name="title" 
                    id="title" 
                    className="text-black"
                    defaultValue={wrangledArticle.title}
                    /> */}

        <label htmlFor="intro">Introduce your ship: </label>
        <textarea
          name="intro"
          id="intro"
          className="text-black"
          defaultValue={wrangledArticle.intro}
        />

        <label htmlFor="">Subheading1: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub1"
          id="sub1"
          className="text-black"
          defaultValue={wrangledArticle.sub1}
        />

        <label htmlFor="">Subheading1 details: </label>
        <textarea
          name="content1"
          id="content1"
          className="text-black"
          defaultValue={wrangledArticle.content1}
        />

        <label htmlFor="">image: </label>
        <input
          type="URL"
          name="img1"
          id="img1"
          className="text-black"
          defaultValue={wrangledArticle.img1}
        />

        <label htmlFor="">image discription: </label>
        <input
          type="text"
          name="alt1"
          id="alt1"
          className="text-black"
          defaultValue={wrangledArticle.alt1}
        />

        <label htmlFor="">Subheading2: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub2"
          id="sub2"
          className="text-black"
          defaultValue={wrangledArticle.sub2}
        />

        <label htmlFor="">Subheading2 details: </label>
        <textarea
          name="content2"
          id="content2"
          className="text-black"
          defaultValue={wrangledArticle.content2}
        />

        <label htmlFor="">image: </label>
        <input
          type="URL"
          name="img2"
          id="img2"
          className="text-black"
          defaultValue={wrangledArticle.img2}
        />

        <label htmlFor="">image discription: </label>
        <input
          type="text"
          name="alt2"
          id="alt2"
          className="text-black"
          defaultValue={wrangledArticle.alt2}
        />

        <label htmlFor="">Subheading3: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub3"
          id="sub3"
          className="text-black"
          defaultValue={wrangledArticle.sub3}
        />

        <label htmlFor="">Subheading3 details: </label>
        <textarea
          name="content3"
          id="content3"
          className="text-black"
          defaultValue={wrangledArticle.content3}
        />

        <label htmlFor="">image: </label>
        <input
          type="URL"
          name="img3"
          id="img3"
          className="text-black"
          defaultValue={wrangledArticle.img3}
        />

        <label htmlFor="">image discription: </label>
        <input
          type="text"
          name="alt3"
          id="alt3"
          className="text-black"
          defaultValue={wrangledArticle.alt3}
        />

        <div className="flex flex-col">
          <h2>Info Box</h2>
          <label htmlFor="info_image">Info Box Image:</label>
          <input
            type="url"
            name="info_image"
            id="info_image"
            defaultValue={infoData.image}
            placeholder="Enter the url of the info box image"
          />
          <label htmlFor="info_alt">Image Description:</label>
          <input
            type="text"
            name="info_alt"
            id="info_alt"
            defaultValue={infoData.alt}
          />
          <label htmlFor="info_name">Full Ship Name:</label>
          <input
            type="text"
            name="info_name"
            id="info_name"
            placeholder="Enter the name of the ship as it will appear in the info box"
            defaultValue={infoData.name}
            required
          />
          <label htmlFor="info_origin">Ship origin:</label>
          <input
            type="text"
            name="info_origin"
            id="info_origin"
            placeholder="Enter the franchise, media, or universe the ship is from"
            defaultValue={infoData.origin}
            required
          />
          <div className="flex flex-row flex-nowrap">
            <label htmlFor="info_length">Ship length:</label>
            <input
              type="number"
              name="info_length"
              id="info_length"
              defaultValue={infoData.length}
              required
            />
            <label htmlFor="length_unit">Units:</label>
            <select
              name="length_unit"
              id="length_unit"
              defaultValue={infoData.length_unit}
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="km">km</option>
              <option value="in">in</option>
              <option value="ft">ft</option>
              <option value="miles">miles</option>
            </select>
          </div>

          <div className="flex flex-row flex-nowrap">
            <label htmlFor="info_width">Ship width:</label>
            <input
              type="number"
              name="info_width"
              id="info_width"
              defaultValue={infoData.width}
              required
            />
            <label htmlFor="width_unit">Units:</label>
            <select
              name="width_unit"
              id="width_unit"
              defaultValue={infoData.width_unit}
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="km">km</option>
              <option value="in">in</option>
              <option value="ft">ft</option>
              <option value="miles">miles</option>
            </select>
          </div>

          <div className="flex flex-row flex-nowrap">
            <label htmlFor="info_height">Ship height:</label>
            <input
              type="number"
              name="info_height"
              id="info_height"
              defaultValue={infoData.height}
              required
            />
            <label htmlFor="height_unit">Units:</label>
            <select
              name="height_unit"
              id="height_unit"
              defaultValue={infoData.height_unit}
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="km">km</option>
              <option value="in">in</option>
              <option value="ft">ft</option>
              <option value="miles">miles</option>
            </select>
          </div>
          <label htmlFor="info_role">Ship Role/Class:</label>
          <input
            type="text"
            name="info_role"
            id="info_role"
            placeholder="E.g. Battleship, Light Cruiser, Exploration Vessel"
            defaultValue={infoData.role}
          />
          <label htmlFor="info_weaponry">Ship Weaponry/Armaments:</label>
          <input
            type="text"
            name="info_weaponry"
            id="info_weaponry"
            placeholder="E.g. 2 AG-2G quad laser cannons, 12 phaser arrays, 250 photon torpedoes"
            defaultValue={infoData.weaponry}
          />
        </div>

        <button
          type="submit"
          className="border-blue-400 border-4 hover:bg-sky-300"
        >
          Edit your Ship
        </button>
      </form>
    </>
  );
}
