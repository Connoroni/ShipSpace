import { db } from "@/utils/dbConnectionString";
export default async function UpdateArticle({ params }) {

    const slug = await params;

 const oneArticle = await db.query(`SELECT * FROM articles WHERE title = $1`, [slug.title,]);

    async function handleUpdate() {
        "use server";
    }



    return (
        <>
        <h1>Update the article</h1>
        <p>Article: {slug.title}</p>
        <form action={handleUpdate}>
        <label htmlFor="title">Shipname: </label>
                    <input type="text" 
                    name="title" 
                    id="title" 
                    className="text-black"
                    defaultValue={oneArticle.title}
                    />

                    <label htmlFor="intro">Introduce your ship: </label>
                    <input type="text" 
                    name="intro" 
                    id="intro" 
                    className="text-black"
                    defaultValue={oneArticle.intro}
                    />

                    <label htmlFor="">Subheading1: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub1" 
                    id="sub1" 
                    className="text-black"
                    defaultValue={oneArticle.sub1}
                    />

                     <label htmlFor="">Subheading1 details: </label>
                    <input type="text" 
                    name="content1" 
                    id="content1" 
                    className="text-black"
                    defaultValue={oneArticle.content1}
                    />

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img1" 
                    id="img1" 
                    className="text-black"
                    defaultValue={oneArticle.img1}
                    />

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt1" 
                    id="alt1" 
                    className="text-black"
                    defaultValue={oneArticle.alt1}
                    />

                   <label htmlFor="">Subheading2: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub2" 
                    id="sub2" 
                    className="text-black"
                    defaultValue={oneArticle.sub2}
                    />

                     <label htmlFor="">Subheading2 details: </label>
                    <input type="text" 
                    name="content2" 
                    id="content2" 
                    className="text-black"
                    defaultValue={oneArticle.content2}
                    />

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img2" 
                    id="img2" 
                    className="text-black"/>

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt2" 
                    id="alt2" 
                    className="text-black"/>

                   <label htmlFor="">Subheading3: </label>
                    <input type= "text" 
                    placeholder= "E.g Battles, Details, Trivia"
                    name="sub3" 
                    id="sub3" 
                    className="text-black"/>

                     <label htmlFor="">Subheading3 details: </label>
                    <input type="text" 
                    name="content3" 
                    id="content3" 
                    className="text-black"/>

                    <label htmlFor="">image: </label>
                    <input type="URL" 
                    name="img3" 
                    id="img3" 
                    className="text-black"/>

                    <label htmlFor="">image discription: </label>
                    <input type="text" 
                    name="alt3" 
                    id="alt3" 
                    className="text-black"/>



                      <button type="submit" className="border-blue-400 border-4 hover:bg-sky-300" >Edit your Ship</button>
        </form>
        </>
    )
}