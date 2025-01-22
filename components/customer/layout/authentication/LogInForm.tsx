import React from "react";
import Input from "../../ui/Input";
import PrimaryButton from "../../ui/PrimaryButton";
import Divider from "../../ui/Divider";
import GoogleSignInButton from "./GoogleSignInButton";

export default function LogInForm() {
  return (
    <form className="flex flex-col items-center justify-center w-full gap-3">
      <Input type="email" name="email" placeholder="example@email.com">
        Email
      </Input>
      <Input type="password" name="password" placeholder="Password">
        Password
      </Input>

      <PrimaryButton type="submit" className="w-full mt-8">
        Login{" "}
      </PrimaryButton>
      <div className="w-full flex items-center justify-center">
        <Divider />
        <span className="text-center w-[400px] text-preset-4-bold my-4">
          Or Login with
        </span>
        <Divider />
      </div>
      <GoogleSignInButton />
    </form>
  );
}
