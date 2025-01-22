import RegisterForm from "@/components/customer/layout/authentication/RegisterForm";
import React from "react";

export default function page() {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-3">
      <h1 className="text-preset-1">Register</h1>
      <p className="text-preset-3 text-primary-text-soft max-w-[400px] text-center">
        Hello, you must create an account to start shopping in our store.
      </p>
      <RegisterForm />
    </div>
  );
}
