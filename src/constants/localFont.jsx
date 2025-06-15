import localFont from "next/font/local";
const vazirFont = localFont({
  src: [
    {
      path: "../fonts/vazir/Vazirmatn-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "block",
});
export default vazirFont;
