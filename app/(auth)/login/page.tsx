"use client";

import { ReactEventHandler, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { Input } from "@/components/UI/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const { session, signInUser } = useAuth();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser(email, password);
      if (result.success) {
        window.location.href = "/";
      }
    } catch (error) {
      setError("Error logging in");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <AuthLayout
        title="Вход"
        subTitle="Влезте във вашия акаунт"
        imageSrc="/perk1.svg"
      >
        <form
          onSubmit={handleSignIn}
          className="w-1/3 flex flex-col items-start justify-center"
        >
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
            <Button type="submit" text="Влизане" />
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
