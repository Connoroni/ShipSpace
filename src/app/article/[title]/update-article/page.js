import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function UpdateArticle({ params }) {

    const slug = await params;

 const oneArticle = await db.query(`SELECT * FROM articles WHERE title = $1`, [slug.title,]);
 console.log(oneArticle);

 const wrangledArticle = oneArticle.rows[0];
 console.log(wrangledArticle);

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

        await db.query(`UPDATE articles SET intro = $1, sub1 = $2, content1 = $3, img1 = $4, alt1 = $5, sub2 = $6, content2 = $7, img2 = $8, alt2 = $9, sub3 = $10, content3 = $11, img3 = $12, alt3 = $13 WHERE title = $14`,
            [intro, sub1, content1, img1, alt1, sub2, content2, img2, alt2, sub3, content3, img3, alt3, slug.title]
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
                    <input type="text" 
                    name="intro" 
                    id="intro" 
                    className="text-black"
                    defaultValue={wrangledArticle.intro}
                    />

                    <label htmlFor="">Subheading1: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub1" 
                    id="sub1" 
                    className="text-black"
                    defaultValue={wrangledArticle.sub1}
                    />

                     <label htmlFor="">Subheading1 details: </label>
                    <input type="text" 
                    name="content1" 
                    id="content1" 
                    className="text-black"
                    defaultValue={wrangledArticle.content1}
                    />

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img1" 
                    id="img1" 
                    className="text-black"
                    defaultValue={wrangledArticle.img1}
                    />

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt1" 
                    id="alt1" 
                    className="text-black"
                    defaultValue={wrangledArticle.alt1}
                    />

                   <label htmlFor="">Subheading2: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub2" 
                    id="sub2" 
                    className="text-black"
                    defaultValue={wrangledArticle.sub2}
                    />

                     <label htmlFor="">Subheading2 details: </label>
                    <input type="text" 
                    name="content2" 
                    id="content2" 
                    className="text-black"
                    defaultValue={wrangledArticle.content2}
                    />

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img2" 
                    id="img2" 
                    className="text-black"
                    defaultValue={wrangledArticle.img2}
                    />

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt2" 
                    id="alt2" 
                    className="text-black"
                    defaultValue={wrangledArticle.alt2}
                    />

                   <label htmlFor="">Subheading3: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub3" 
                    id="sub3" 
                    className="text-black"
                    defaultValue={wrangledArticle.sub3}
                    />

                     <label htmlFor="">Subheading3 details: </label>
                    <input type="text" 
                    name="content3" 
                    id="content3" 
                    className="text-black"
                    defaultValue={wrangledArticle.content3}
                    />

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img3" 
                    id="img3" 
                    className="text-black"
                    defaultValue={wrangledArticle.img3}
                    />

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt3" 
                    id="alt3" 
                    className="text-black"
                    defaultValue={wrangledArticle.alt3}
                    />



                      <button type="submit" className="border-blue-400 border-4 hover:bg-sky-300" >Edit your Ship</button>
        </form>
        </>
    )
}