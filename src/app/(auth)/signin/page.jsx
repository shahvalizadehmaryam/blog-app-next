"use client";
import { signinApi } from "@/services/authServices";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  })
  .required();
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const submitHandler = async (data) => {
    try {
      const { user, message } = await signinApi(data);
      toast.success(message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          errors={errors}
          isRequired
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          errors={errors}
          isRequired
          dir="ltr"
          type="password"
        />
        <Button variant="primary" type="submit" className="w-full">
          ورود
        </Button>
        <Link href="/signup" className="text-secondary-500 mt-6 text-center">ثبت نام</Link>
      </form>
    </div>
  );
}

export default Signin;
