import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";

export const metadata = {
  title: "بلاگ ها",
};
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg text-secondary-500 font-bold">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 gap-y-4 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 text-secondary-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
