"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
const schema = yup
  .object({
    name: yup
      .string()
      .min(8, "نام و نام خانوادگی حداقل باید 8 کاراکتر باشد")
      .max(30, "نام و نام خانوادگی حداکثر باید 30 کاراکتر باشد")
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  })
  .required();
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signup } = useAuth();
  const onSubmit = async (values) => {
    await signup(values);
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
          isRequired
          register={register}
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          errors={errors}
          dir="ltr"
          isRequired
        />
        <RHFTextField
          type="password"
          label="رمز عبور"
          name="password"
          errors={errors}
          isRequired
          register={register}
          dir="ltr"
        />
        <Button variant="primary" type="submit" className="w-full">
          ثبت نام
        </Button>
      </form>
    </div>
  );
}
