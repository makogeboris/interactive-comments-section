import { useState } from "react";
import Button from "./Button";
import VoteButton from "./VoteButton";
import ActionButton from "./ActionButton";

function NewComment({
  avatar,
  timestamp,
  content,
  isEditing,
  onDelete,
  onEdit,
  onSave,
}) {
  const [editedContent, setEditedContent] = useState(content);

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 sm:p-6 md:flex-row md:gap-6">
      <div className="hidden md:block">
        <VoteButton votes="0" />
      </div>

      <div className="flex w-full flex-col gap-4 md:gap-0">
        <div className="flex items-center justify-between md:mb-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <img className="size-8" src={avatar} alt="" />
              <p className="ml-4 text-base font-bold text-[var(--color-dark-blue)]">
                juliusomo
              </p>
              <div className="ml-2 rounded-xs bg-[var(--color-moderate-blue)] px-1.5 pt-0 pb-0.5">
                <p className="text-xs font-normal text-white">you</p>
              </div>
            </div>
            <p className="text-base font-normal text-[var(--color-grayish-blue)]">
              {timestamp}
            </p>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <ActionButton type="delete" onClick={onDelete}>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75 1.16667H11.6667V2.33333H0V1.16667H2.91667L3.89324 0H7.77346L8.75 1.16667ZM2.72223 14C1.86659 14 1.16667 13.3017 1.16667 12.4479V3.5H10.5V12.4479C10.5 13.3017 9.80007 14 8.94447 14H2.72223Z"
                  fill="#ED6368"
                />
              </svg>
              Delete
            </ActionButton>
            <ActionButton type="default" onClick={onEdit}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0813 0.474468L13.4788 2.87199C14.1491 3.51055 14.1765 4.57097 13.5401 5.24327L5.66499 13.1184C5.37977 13.4012 5.00593 13.5773 4.60623 13.6171L0.957442 13.9496H0.878691C0.646111 13.951 0.422565 13.8596 0.257434 13.6959C0.0728398 13.5119 -0.0201832 13.2553 0.00368177 12.9959L0.379936 9.34706C0.419753 8.94736 0.595858 8.57352 0.878691 8.2883L8.75377 0.413217C9.43263 -0.160306 10.4336 -0.133966 11.0813 0.474468ZM8.15877 3.4495L10.5038 5.79452L12.2538 4.08826L9.86504 1.69948L8.15877 3.4495Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </ActionButton>
          </div>
        </div>

        {isEditing ? (
          <div className="flex flex-col items-end gap-4">
            <textarea
              className="w-full resize-none rounded-lg border border-[var(--color-light-gray)] bg-white p-3 px-6 text-base font-normal text-[var(--color-grayish-blue)] focus-visible:outline-2 focus-visible:outline-[var(--color-moderate-blue)]"
              rows={3}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <Button type="default" onClick={() => onSave(editedContent)}>
              Update
            </Button>
          </div>
        ) : (
          <p className="text-base font-normal text-[var(--color-grayish-blue)]">
            {content}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="md:hidden">
            <VoteButton votes="0" />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ActionButton type="delete" onClick={onDelete}>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75 1.16667H11.6667V2.33333H0V1.16667H2.91667L3.89324 0H7.77346L8.75 1.16667ZM2.72223 14C1.86659 14 1.16667 13.3017 1.16667 12.4479V3.5H10.5V12.4479C10.5 13.3017 9.80007 14 8.94447 14H2.72223Z"
                  fill="#ED6368"
                />
              </svg>
              Delete
            </ActionButton>

            <ActionButton type="default" onClick={onEdit}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0813 0.474468L13.4788 2.87199C14.1491 3.51055 14.1765 4.57097 13.5401 5.24327L5.66499 13.1184C5.37977 13.4012 5.00593 13.5773 4.60623 13.6171L0.957442 13.9496H0.878691C0.646111 13.951 0.422565 13.8596 0.257434 13.6959C0.0728398 13.5119 -0.0201832 13.2553 0.00368177 12.9959L0.379936 9.34706C0.419753 8.94736 0.595858 8.57352 0.878691 8.2883L8.75377 0.413217C9.43263 -0.160306 10.4336 -0.133966 11.0813 0.474468ZM8.15877 3.4495L10.5038 5.79452L12.2538 4.08826L9.86504 1.69948L8.15877 3.4495Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComment;
