"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignInFormSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { config } from "@/config/config";

export default function SignInForm() {
  const [errorFromBackend, setErrorFromBackend] = useState("");
  const router = useRouter();
  const callbackUrl = "/dashboard";
  const form = useForm({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const accessTokenLocal = localStorage.getItem("accessToken");
    if (accessTokenLocal) {
      router.push(callbackUrl);
    } else {
      router.push("/");
    }
  }, []);

  const onSubmit = async (values) => {
    const { email, password } = values;
    const response = await fetch(`${config.BASE_URL_SERVER}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (response.ok) {
      const {
        data: { accessToken, refreshToken },
      } = await response.json();
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      router.push(callbackUrl);
    } else {
      const { message } = await response.json();
      setErrorFromBackend(message);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="relative flex flex-col justify-between w-1/2 h-screen p-12 bg-gray-900">
        <Image
          src={"/railtel_ggndc_building.jpg"}
          alt="railtel_ggndc_building"
          width={1200}
          height={900}
          className="absolute inset-0 object-fill w-full h-full opacity-40"
        />
        <Image
          src={"/railtel_logo.svg"}
          alt="RailTel"
          width={60}
          height={75}
          className="w-[60] h-[75] z-50"
        />

        <div className="z-50">
          <h2 className="mt-6 text-xl font-bold text-slate-100 sm:text-2xl md:text-3xl">
            Welcome to the Dashboard Login Page!
          </h2>

          <p className="mt-4 leading-relaxed text-slate-200">
            Access integrated security solutions: HPSM for incident management,
            ArcSight for threat detection, and Web Application Security for
            vulnerability protection.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen p-12 bg-slate-100">
        <div className="flex flex-col gap-2 p-4 space-y-4 rounded-md w-96 text-slate-800">
          <h1 className="text-2xl font-semibold">Log in to Dashboard</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="mail@railtelindia.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>{errorFromBackend}</FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="w-full mt-6 hover:bg-primary-hover"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
          {/* <Button
          asChild
          variant={"link"}
          className="self-end px-0 pl-1 font-medium text-sky-600 w-min"
        >
          <Link href={"/auth/forgot-password"}>Forgot your password?</Link>
        </Button> */}
        </div>
      </div>
    </div>
  );
}
