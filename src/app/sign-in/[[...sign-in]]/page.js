import { SignIn, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <h1>Sign In</h1>
      <SignedOut>
        <p className="text-lg">
          Welcome back to ShipSpace, the home of all your favourite spaceships!
        </p>
        <p className="text-lg">Sign into your account below:</p>
        <p className="text-base">
          Or <SignUpButton /> if you don&apos;t have an account.
        </p>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <p>You are already signed in.</p>
        <Link href={"/"}>Click here to go home</Link>
      </SignedIn>
    </>
  );
}
