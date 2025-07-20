"use client";


import SubmitButton from "@/ui/SubmissionButton";
import TextArea from "@/ui/TextArea";
import createComment from "app/blogs/_actions/createComment";
import { useState } from "react";

const CommentForm = ({ postId, parentId }) => {
  const [text, setText] = useState("");
  const addCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form className="space-y-7" action={addCommentWithData}>
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              <SubmitButton>تایید</SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
