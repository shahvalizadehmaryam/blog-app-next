import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Spinner from "@/ui/Spinner";

export default function PostsPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostsTable />
      </Suspense>
    </div>
  );
}
