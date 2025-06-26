import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-red-600 mb-8">
             هیچ پستی با این اطلاعات یافت نشد.
            </h1>
            <Link href="/blogs">رفتن به صفحه پست ها؟</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
