import React from "react";
import Input from "../../ui/Input";
import PrimaryButton from "../../ui/PrimaryButton";
import Divider from "../../ui/Divider";
import GoogleSignInButton from "./GoogleSignInButton";

export default function RegisterForm() {
  return (
    <form className="flex flex-col items-center justify-center w-full gap-3">
      <Input type="text" name="fullName" placeholder="Enter full name">
        Name
      </Input>
      <Input type="email" name="email" placeholder="example@email.com">
        Email
      </Input>
      <Input type="password" name="password" placeholder="Password">
        Password
      </Input>
      <Input type="password" name="password" placeholder="Repeat Password">
        Repeat Password
      </Input>
      <Input type="text" name="phone" placeholder="+20 111 2222 333">
        Phone Number
      </Input>
      <Input
        type="text"
        name="Address"
        placeholder="10 Meshaha Street-Dokki, P.O. Box: 12311"
      >
        Address
      </Input>
      <PrimaryButton type="submit" className="w-full mt-8">
        Register
      </PrimaryButton>
      <div className="w-full flex items-center justify-center">
        <Divider />
        <span className="text-center w-[400px] text-preset-4-bold my-4">
          Or sign up with
        </span>
        <Divider />
      </div>
      <GoogleSignInButton />
    </form>
  );
}
