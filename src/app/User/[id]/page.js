

export default async function UserPage({ params }) {
    const slug = await params;
    console.log(slug);
    return <h1>User Profile {slug.id}</h1> 
}