import Header from "@/components/Header";

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </div>
  );
}
