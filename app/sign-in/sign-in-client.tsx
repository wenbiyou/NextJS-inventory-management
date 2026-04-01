'use client';

import Link from "next/link";
import { SignIn } from "@stackframe/stack";

export function SignInClient() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-purple-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
        <Link href="/" className="block mt-4 text-center text-sm text-gray-600 hover:text-purple-600">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
