import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const metadata = {
  title:"New article - Ship Space",
  description:"Create a new entry in the Ship Space database."
};
export default async function NewArticlePage() {
  const tagList = (await db.query(`SELECT * FROM tags ORDER BY tag_name`)).rows;


  async function handleSubmit(formValues) {
    "use server";
    const formData = {
      title: formValues.get("title"),
      intro: formValues.get("intro"),
      sub1: formValues.get("sub1"),
      content1: formValues.get("content1"),
      img1: formValues.get("img1"),
      alt1: formValues.get("alt1"),
      sub2: formValues.get("sub2"),
      content2: formValues.get("content2"),
      img2: formValues.get("img2"),
      alt2: formValues.get("alt2"),
      sub3: formValues.get("sub3"),
      content3: formValues.get("content3"),
      img3: formValues.get("img3"),
      alt3: formValues.get("alt3"),
      image: formValues.get("info_image"),
      alt: formValues.get("info_alt"),
      name: formValues.get("info_name"),
      origin: formValues.get("info_origin"),
      info_length: formValues.get("info_length"),
      length_unit: formValues.get("length_unit"),
      width: formValues.get("info_width"),
      width_unit: formValues.get("width_unit"),
      height: formValues.get("info_height"),
      height_unit: formValues.get("height_unit"),
      role: formValues.get("info_role"),
      weaponry: formValues.get("info_weaponry"),
      tag1: formValues.get("tag1"),
      tag2: formValues.get("tag2"),
    };

    db.query(
      "INSERT INTO articles ( title, intro, sub1, content1, img1, alt1, sub2, content2, img2, alt2, sub3, content3, img3, alt3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
      [
        formData.title,
        formData.intro,
        formData.sub1,
        formData.content1,
        formData.img1,
        formData.alt1,
        formData.sub2,
        formData.content2,
        formData.img2,
        formData.alt2,
        formData.sub3,
        formData.content3,
        formData.img3,
        formData.alt3,
      ]
    );

    db.query(
      `INSERT INTO info_box (
  article_title,
  image,
  alt,
  name,
  origin,
  length,
  length_unit,
  width,
  width_unit,
  height,
  height_unit,
  role,
  weaponry
  )
  VALUES (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12,
  $13)`,
      [
        formData.title,
        formData.image,
        formData.alt,
        formData.name,
        formData.origin,
        formData.info_length,
        formData.length_unit,
        formData.width,
        formData.width_unit,
        formData.height,
        formData.height_unit,
        formData.role,
        formData.weaponry,
      ]
    );

    {
      formData.tag2 = null
        ? db.query(
            `INSERT INTO tag_junction (article_title, tag_id) 
      VALUES ($1, $2)`,
            [formData.title, formData.tag1]
          )
        : db.query(
            `INSERT INTO tag_junction (article_title, tag_id) 
      VALUES ($1, $2), ($1, $3)`,
            [formData.title, formData.tag1, formData.tag2]
          );
    }

    redirect("/");
    revalidatePath("/");
  }

  return (
    <>
      <h1>Upload a new Starship! </h1>
      <form action={handleSubmit}>
        <label htmlFor="title">Shipname: </label>
        <input type="text" name="title" id="title" className="text-black" />

        <label htmlFor="intro">Introduce your ship: </label>
        <textarea name="intro" id="intro" className="text-black" />

        <label htmlFor="">Subheading1: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub1"
          id="sub1"
          className="text-black"
        />

        <label htmlFor="">Subheading1 details: </label>
        <textarea name="content1" id="content1" className="text-black" />

        <label htmlFor="">image: </label>
        <input type="URL" name="img1" id="img1" className="text-black" />

        <label htmlFor="">image discription: </label>
        <input type="text" name="alt1" id="alt" className="text-black" />

        <label htmlFor="">Subheading2: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub2"
          id="sub2"
          className="text-black"
        />

        <label htmlFor="">Subheading2 details: </label>
        <textarea name="content2" id="content2" className="text-black" />

        <label htmlFor="">image: </label>
        <input type="URL" name="img2" id="img2" className="text-black" />

        <label htmlFor="">image discription: </label>
        <input type="text" name="alt2" id="alt2" className="text-black" />

        <label htmlFor="">Subheading3: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub3"
          id="sub3"
          className="text-black"
        />

        <label htmlFor="">Subheading3 details: </label>
        <textarea name="content3" id="content3" className="text-black" />

        <label htmlFor="">image: </label>
        <input type="URL" name="img3" id="img3" className="text-black" />

        <label htmlFor="">image discription: </label>
        <input type="text" name="alt3" id="alt3" className="text-black" />

        <div className="flex flex-col">
          <h2>Info Box</h2>
          <label htmlFor="info_image">Info Box Image:</label>
          <input
            type="url"
            name="info_image"
            id="info_image"
            placeholder="Enter the url of the info box image"
          />
          <label htmlFor="info_alt">Image Description:</label>
          <input type="text" name="info_alt" id="info_alt" />
          <label htmlFor="info_name">Full Ship Name:</label>
          <input
            type="text"
            name="info_name"
            id="info_name"
            placeholder="Enter the name of the ship as it will appear in the info box"
            required
          />
          <label htmlFor="info_origin">Ship origin:</label>
          <input
            type="text"
            name="info_origin"
            id="info_origin"
            placeholder="Enter the franchise, media, or universe the ship is from"
            required
          />
          <div className="flex flex-row flex-nowrap">
            <label htmlFor="info_length">Ship length:</label>
            <input type="number" name="info_length" id="info_length" required />
            <label htmlFor="length_unit">Units:</label>
            <select name="length_unit" id="length_unit">
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
            <input type="number" name="info_width" id="info_width" required />
            <label htmlFor="width_unit">Units:</label>
            <select name="width_unit" id="width_unit">
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
            <input type="number" name="info_height" id="info_height" required />
            <label htmlFor="height_unit">Units:</label>
            <select name="height_unit" id="height_unit">
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
          />
          <label htmlFor="info_weaponry">Ship Weaponry/Armaments:</label>
          <input
            type="text"
            name="info_weaponry"
            id="info_weaponry"
            placeholder="E.g. 2 AG-2G quad laser cannons, 12 phaser arrays, 250 photon torpedoes"
          />
        </div>

        <label htmlFor="tag1">Select a tag</label>
        <select id="tag1" name="tag1" required>
          {tagList.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.tag_name}
            </option>
          ))}
        </select>

        <label htmlFor="tag2">Select a second tag, or leave it blank</label>
        <select id="tag2" name="tag2" required>
          <option value={null}>N/A</option>
          {tagList.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.tag_name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="border-blue-400 border-4 hover:bg-sky-300"
        >
          Submit your Ship
        </button>
      </form>
    </>
  );
}
