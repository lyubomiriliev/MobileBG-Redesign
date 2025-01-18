"use client";

import AuthLayout from "@/components/AuthLayout";
import Button from "@/components/Button";
import { Input } from "@/components/UI/Input";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  type RegisterFormData = {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    repeatPassword: string;
  };

  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signUpError) {
        throw new Error(signUpError.message);
      }

      const { error: insertError } = await supabase.from("users").insert({
        email: formData.email,
        username: formData.username,
        first_name: formData.firstName,
        last_name: formData.lastName,
        created_at: new Date(),
      });

      if (insertError) {
        throw new Error(insertError.message);
      }

      router.push("/");
      alert("Вашият акаунт беше създаден");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during sign-up:", error.message);
        setError(error.message || "Възникна грешка при регистрацията");
      } else {
        console.error("Unexpected error:", error);
        setError("Възникна неочаквана грешка");
      }
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
          onSubmit={!loading ? handleSignUp : undefined}
          className="lg:w-1/3 w-full h-[75vh] lg:h-[60vh] flex flex-col items-start justify-start"
        >
          <Input
            label="E-mail"
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <Input
            label="Име"
            value={formData.firstName}
            onChange={(value) => handleInputChange("firstName", value)}
          />
          <Input
            label="Фамилия"
            value={formData.lastName}
            onChange={(value) => handleInputChange("lastName", value)}
          />
          <Input
            label="Потребителско име"
            value={formData.username}
            onChange={(value) => handleInputChange("username", value)}
          />
          <Input
            type="password"
            label="Парола"
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <Input
            type="password"
            label="Повтори паролата"
            value={formData.repeatPassword}
            onChange={(value) => handleInputChange("repeatPassword", value)}
          />
          <div className="w-full flex justify-start items-center py-4">
            <Button type="submit" text="Регистрация" />
          </div>
          <div>
            <p className="text-red-600 text-lg">{error}</p>
          </div>
          <div className="flex items-center gap-1">
            <p>Вече имате регистрация?</p>
            <Link href="/login">
              <span className="font-bold cursor-pointer uppercase text-mobilePrimary">
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
