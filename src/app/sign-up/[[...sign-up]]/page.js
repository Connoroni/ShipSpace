import { SignUp, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign Up</h1>
      <SignedOut>
        <p className="text-lg">
          Welcome to ShipSpace, the home of all your favourite spaceships! With
          an account you can customise your profile and create or edit articles.
        </p>
        <p className="text-lg">Sign up below to create an account.</p>
        <p className="text-base">
          Or <SignInButton /> if you already have an account.
        </p>
        <SignUp />
      </SignedOut>
      <SignedIn>
        <p>You are already signed in.</p>
        <Link href={"/"}>Click here to go home</Link>
      </SignedIn>
    </>
  );
}
