"use server";

import { createCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function createComment(postId, parentId, formData) {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath('/blogs/[slug]')
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
}
