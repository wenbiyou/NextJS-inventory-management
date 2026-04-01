import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import { SignInClient } from "./sign-in-client";

export default async function SignInPage() {
  const user = await stackServerApp.getUser();
  console.log(user);
  if (user) {
    redirect("/dashboard");
  }
  return <SignInClient />;
}
