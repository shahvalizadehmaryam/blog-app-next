"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
// export const metadata = {
//   title: "ثبت نام",
// };
export default function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
        />
        <RHFTextField
          type="password"
          label="رمز عبور"
          name="password"
          register={register}
          dir="ltr"
        />
        <Button variant="primary" type="submit">
          ثبت نام
        </Button>
      </form>
    </div>
  );
}
