import React from "react";
import SecondaryButton from "../../ui/SecondaryButton";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton() {
  return (
    <SecondaryButton className="w-full flex items-center justify-center gap-4">
      <FcGoogle className="text-preset-2" />
      Sign in with Google
    </SecondaryButton>
  );
}
