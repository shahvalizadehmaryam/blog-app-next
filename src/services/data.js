import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUserApi } from "./authServices";
import { getPosts } from "./postServices";
import { getAllCommentsApi } from "./commentServices";

export const fetchCardData = async () => {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const data = await Promise.all([
      getAllUserApi(options),
      getPosts(),
      getAllCommentsApi(options),
    ]);
    const numberOfUsers = Number(data[0].users.length ?? 0);
    const numberOfPosts = Number(data[1].length ?? 0);
    const numberOfComments = Number(data[2].length ?? 0);
    return {
      numberOfUsers,
      numberOfPosts,
      numberOfComments,
    };
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error("Failed to fetch card data");
  }
};
