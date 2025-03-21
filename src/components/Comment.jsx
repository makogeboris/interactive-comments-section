import VoteButton from "./VoteButton";
import ActionButton from "./ActionButton";
import avatar from "../assets/avatars/image-amyrobson.png";

function Comment() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 sm:p-6 md:flex-row md:gap-6">
      <div className="hidden md:block">
        <VoteButton />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <img className="size-8" src={avatar} alt="" />
            <a
              href="#"
              className="rounded-sm text-base font-bold text-[var(--color-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-moderate-blue)]"
            >
              amyrobson
            </a>
            <p className="text-base font-normal text-[var(--color-grayish-blue)]">
              1 month ago
            </p>
          </div>

          <div className="hidden md:block">
            <ActionButton type="default">
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
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You’ve nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="md:hidden">
            <VoteButton />
          </div>

          <div className="md:hidden">
            <ActionButton type="default">
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
  );
}

export default Comment;
