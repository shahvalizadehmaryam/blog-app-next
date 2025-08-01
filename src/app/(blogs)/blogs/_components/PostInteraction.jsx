"use client";
import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
  const router = useRouter();
  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.reponse?.error?.message);
    }
  };
  const bookmarkHandler = async (bookmarkId) => {
    try {
      const { message } = await bookmarkPostApi(bookmarkId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.reponse?.error?.message);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
