import { db } from "@/utils/dbConnectionString";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "./createprofile.module.css";

export default async function CreateProfile() {
  const clerkUser = await currentUser();
  const emailJson = JSON.stringify(clerkUser.emailAddresses[0].emailAddress);
  const idJson = JSON.stringify(clerkUser.id);
  console.log("JSON data test:", emailJson, idJson);

  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      clerk_id: idJson,
      username: formValues.get("username"),
      email: emailJson,
      profile_pic: formValues.get("profile_pic"),
      bio: formValues.get("bio"),
    };

    db.query(
      "INSERT INTO users (clerk_id, username, email, profile_pic, bio) VALUES ($1, $2, $3, $4, $5)",
      [
        formData.clerk_id,
        formData.username,
        formData.email,
        formData.profile_pic,
        formData.bio,
      ]
    );
    redirect("/");
  }

  return (
    <>
      <div className={styles.createProfile}>
      <h1 className={styles.title}>Create Profile</h1>
      <form action={handleSubmit}>
        <label className={styles.formLabel} htmlFor="username">Choose a username:</label>
        <input className={styles.formInput} type="text" name="username" id="username" />
        
        <label className={styles.formLabel} htmlFor="profile_pic">Upload a profile picture: [URL Only Please]</label>
        <input className={styles.formInput} type="text" name="profile_pic" id="profile_pic" />
        
        <label className={styles.formLabel} htmlFor="bio">Write a short bio:</label>
        <input className={styles.formInput} type="text" name="bio" id="bio" />
        
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

//Need to add 'submitted' message
