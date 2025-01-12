"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { Input } from "@/components/UI/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log("Starting sign-in process for email:", email);

    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(data);
      alert("Sign-in successful!");
      window.location.href = "/"; // Redirect to home or dashboard
    } catch (err) {
      console.error("Unexpected error during sign-in:", err);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <AuthLayout
        title="Вход"
        subTitle="Влезте във вашия акаунт"
        imageSrc="/perk1.svg"
      >
        <form className="w-1/3 flex flex-col items-start justify-center">
          <Input
            label="E-mail"
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            type="password"
            label="Парола"
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <div className="w-full flex justify-start items-start py-2">
            <Link href="/forgot-password">
              <span className="cursor-pointer text-mobilePrimary">
                Забравена парола?
              </span>
            </Link>
          </div>
          <div className="w-full flex justify-start items-center py-4">
            <Button onClick={handleSignIn} text="Влизане" />
          </div>
          <div className="flex items-center gap-1">
            <p>Все още нямате акаунт?</p>
            <Link href="/register">
              <span className="font-bold cursor-pointer text-mobilePrimary z-50">
                Регистрирайте се
              </span>
            </Link>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default SignIn;
