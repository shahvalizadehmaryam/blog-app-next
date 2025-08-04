import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import Empty from "@/ui/Empty";

export default async function PostsTable({ queries = "" }) {
  const posts = await getPosts(queries);

  if (!posts.length) return <Empty resourcename="پستی" />;
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {posts.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
