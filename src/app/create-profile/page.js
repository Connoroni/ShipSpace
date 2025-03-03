import { db } from "@/utils/dbConnectionString";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateProfile() {
  const clerkUser = await currentUser();
  const emailJson = JSON.stringify(clerkUser.emailAddresses[0].emailAddress);
  const idJson = JSON.stringify(clerkUser.id);
  console.log("JSON data test:", emailJson, idJson);

  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      clerk_id: idJson,
      email: emailJson,
      //   use formValues.get() here to get the values of each of the inputs before submitting
    };

    db
      .query
      //   db query to insert form values
      ();
    redirect("/");
  }

  return (
    <>
      <h1>PLACEHOLDER</h1>
    </>
  );
}
