import LogInForm from "@/components/customer/layout/authentication/LogInForm";
import React from "react";

export default function page() {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-3">
      <h1 className="text-preset-1">Log In</h1>
      <p className="text-preset-3 text-primary-text-soft max-w-[400px] text-center">
        Welcome back! Login with your account to continue shopping in our store.
      </p>
      <LogInForm />
    </div>
  );
}
