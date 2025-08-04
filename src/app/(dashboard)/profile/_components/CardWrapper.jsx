import { fetchCardData } from "@/services/data";
import Card from "./Card";

export default async function CardWrapper() {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardData();
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card title="کاربران" type="users" value={numberOfUsers} />
      <Card title="کامنت ها" type="comments" value={numberOfComments} />
      <Card title="پست ها" type="posts" value={numberOfPosts} />
    </div>
  );
}
