import { useState } from "react";
import VoteButton from "./VoteButton";
import ActionButton from "./ActionButton";
import AddComment from "./AddComment";
import NewComment from "./NewComment";

function Comment({
  user,
  avatar,
  timestamp,
  content,
  votes,
  children,
  onReply,
  replies = [],
  onReplyDelete,
  onReplyEdit,
}) {
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (text) => {
    onReply(text);
    setIsReplying(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 sm:p-6 md:flex-row md:gap-6">
        <div className="hidden md:block">
          <VoteButton votes={votes} />
        </div>

        <div className="flex w-full flex-col gap-4 md:gap-0">
          <div className="flex items-center justify-between md:mb-4">
            <div className="flex flex-wrap items-center gap-4">
              <img className="size-8" src={avatar} alt={`${user}'s avatar`} />
              <a
                href="#"
                className="rounded-sm text-base font-bold text-[var(--color-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-moderate-blue)]"
              >
                {user}
              </a>
              <p className="text-base font-normal text-[var(--color-grayish-blue)]">
                {timestamp}
              </p>
            </div>

            <div className="hidden md:block">
              <ActionButton
                type="default"
                onClick={() => setIsReplying(!isReplying)}
              >
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z"
                    fill="#5357B6"
                  />
                </svg>
                Reply
              </ActionButton>
            </div>
          </div>

          <p className="text-base font-normal text-[var(--color-grayish-blue)]">
            {children && (
              <a
                href="#"
                className="rounded-sm font-bold text-[var(--color-moderate-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-moderate-blue)]"
              >
                {children}{" "}
              </a>
            )}
            {content}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="md:hidden">
              <VoteButton votes={votes} />
            </div>

            <div className="md:hidden">
              <ActionButton
                type="default"
                onClick={() => setIsReplying(!isReplying)}
              >
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z"
                    fill="#5357B6"
                  />
                </svg>
                Reply
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      {isReplying && (
        <div className="ml-0 md:ml-24">
          <AddComment
            onAddComment={handleReply}
            placeholder={`Reply to ${user}`}
          />
        </div>
      )}

      {replies.length > 0 && (
        <div className="mt-4 flex gap-4 sm:gap-11 sm:pl-11 md:mt-5">
          <div className="w-0.5 bg-[var(--color-light-gray)]"></div>
          <div className="w-full space-y-4 md:space-y-5">
            {replies.map((reply) => (
              <NewComment
                key={reply.id}
                id={reply.id}
                avatar={reply.avatar}
                timestamp={reply.timestamp}
                content={reply.content}
                isEditing={reply.isEditing}
                onDelete={() => onReplyDelete(reply.id)}
                onEdit={() => onReplyEdit(reply.id, "edit")}
                onSave={(updatedText) => onReplyEdit(reply.id, updatedText)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
