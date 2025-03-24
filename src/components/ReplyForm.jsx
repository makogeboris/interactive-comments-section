import { useState } from "react";
import Textarea from "./Textarea";
import Button from "./Button";

function ReplyForm({ onAddReply, parentId, replyingTo, onCancel }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    onAddReply(text, parentId);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg bg-white p-4 sm:flex-row sm:items-start sm:p-6"
    >
      <img
        className="hidden size-8 sm:block sm:size-10"
        src="/avatars/image-juliusomo.png"
        alt=""
      />

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Replying to @${replyingTo}`}
      />

      <div className="flex flex-wrap items-center justify-between sm:hidden">
        <img
          className="size-8 sm:size-10"
          src="/avatars/image-juliusomo.png"
          alt=""
        />
        <Button type="default">Reply</Button>
      </div>

      <div className="hidden gap-2 sm:flex">
        <Button type="default">Reply</Button>
      </div>
    </form>
  );
}

export default ReplyForm;
