import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ", // a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
