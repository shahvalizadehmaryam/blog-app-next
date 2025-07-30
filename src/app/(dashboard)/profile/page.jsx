import React from "react";
import Card from "./_components/Card";
import { fetchCardData } from "@/services/data";

async function ProfilePage() {
       const {numberOfUsers, numberOfComments, numberOfPosts} = await fetchCardData(); 
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card title="کاربران" type="users" value={numberOfUsers} />
      <Card title="کامنت ها" type="comments" value={numberOfComments} />
      <Card title="پست ها" type="posts" value={numberOfPosts} />
    </div>
  );
}

export default ProfilePage;
