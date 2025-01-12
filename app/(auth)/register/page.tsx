"use client";

import AuthLayout from "@/components/AuthLayout";
import Button from "@/components/Button";
import { Input } from "@/components/UI/Input";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassowrd, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { session, signUpNewUser } = useAuth();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

      if (result.success) {
        window.location.href = "/"; // Redirect to home or dashboard
      }
    } catch (error) {
      setError("an error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthLayout
        title="Регистрация"
        subTitle="Създайте вашия акаунт"
        imageSrc="/perk1.svg"
      >
        <form
          onSubmit={handleSignUp}
          className="w-1/3 flex flex-col items-start justify-start"
        >
          <Input
            label="E-mail"
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            label="Потребителско име"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <Input
            type="password"
            label="Парола"
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <Input
            type="password"
            label="Повтори паролата"
            value={repeatPassowrd}
            onChange={(value) => setRepeatPassword(value)}
          />
          <div className="w-full flex justify-start items-center py-4">
            <Button type="submit" text="Регистрация" />
          </div>
          <div className="flex items-center gap-1">
            <p>Вече имате регистрация</p>
            <Link href="/login">
              <span className="font-bold cursor-pointer text-mobilePrimary">
                Влезте тук
              </span>
            </Link>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
