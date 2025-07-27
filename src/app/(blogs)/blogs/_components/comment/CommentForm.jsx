"use client";

import SubmitButton from "@/ui/SubmissionButton";
import TextArea from "@/ui/TextArea";
import createComment from "app/blogs/_actions/createComment";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

const initialState = {
  message: "",
  error: "",
};

const CommentForm = ({ postId, parentId }) => {
  const [text, setText] = useState("");
  // const addCommentWithData = createComment.bind(null, postId, parentId);
  const [state, formAction] = useActionState(createComment, initialState);
  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            action={(formData) => {
              formAction({
                formData,
                postId,
                parentId,
              });
            }}
          >
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
