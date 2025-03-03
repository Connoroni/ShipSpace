import { db } from "@/utils/dbConnectionString";
import Image from "next/image";
export default async function UserPage({ params }) {
    const slug = await params;
    console.log(slug);
    const user = await db.query(`SELECT * FROM users WHERE id=$1`, [slug.id]);

    const wrangledUser = user.rows;
    console.log(wrangledUser);


    return (
    <>
    <h1>User Profile {slug.id}</h1> 
    {wrangledUser.map((oneUser) => (
        <div key={oneUser.id}>
            <h2>
                Username: {oneUser.username}
            </h2>
            <h2>
                Email: {oneUser.email}
            </h2>
            <Image src={oneUser.profile_pic} alt="Users profile picture" width="200" height="200"/>
            <h2>
                Bio: {oneUser.bio}
            </h2>

        </div>
    ))}
    </>
    )



}