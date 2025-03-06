import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title:"New article - Ship Space",
  description:"Create a new entry in the Ship Space database."
};

export default function NewArticlePage() {
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
      alt3: formValues.et("alt3"),
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
        <input type="text" name="intro" id="intro" className="text-black" />

        <label htmlFor="">Subheading1: </label>
        <input
          type="text"
          placeholder="E.g Battles, Details, Trivia"
          name="sub1"
          id="sub1"
          className="text-black"
        />

        <label htmlFor="">Subheading1 details: </label>
        <input
          type="text"
          name="content1"
          id="content1"
          className="text-black"
        />

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
        <input
          type="text"
          name="content2"
          id="content2"
          className="text-black"
        />

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
        <input
          type="text"
          name="content3"
          id="content3"
          className="text-black"
        />

        <label htmlFor="">image: </label>
        <input type="URL" name="img3" id="img3" className="text-black" />

        <label htmlFor="">image discription: </label>
        <input type="text" name="alt3" id="alt3" className="text-black" />

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
