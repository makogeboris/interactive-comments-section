import { useState } from "react";

function VoteButton({ votes }) {
  const [voteCount, setVoteCount] = useState(Number(votes));
  const [userVote, setUserVote] = useState(null);

  const handleUpvote = () => {
    if (userVote === "up") return;

    setVoteCount((prev) => prev + (userVote === "down" ? 2 : 1));
    setUserVote("up");
  };

  const handleDownvote = () => {
    if (userVote === "down") return;

    setVoteCount((prev) => prev - (userVote === "up" ? 2 : 1));
    setUserVote("down");
  };

  return (
    <div className="flex h-10 w-full max-w-[6.25rem] min-w-[6.25rem] items-center justify-between rounded-[10px] bg-[var(--color-very-light-gray)] px-4 py-2.5 md:min-h-[6.25rem] md:max-w-10 md:min-w-auto md:flex-col">
      <button
        aria-label="Upvote"
        onClick={handleUpvote}
        disabled={userVote === "up"}
        className="group cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-moderate-blue)]"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33024 10.896C6.4668 10.896 6.58474 10.8463 6.68406 10.747C6.78337 10.6477 6.83303 10.5298 6.83303 10.3932V7.004H10.1477C10.2843 7.004 10.4022 6.95434 10.5016 6.85503C10.6009 6.75571 10.6505 6.63777 10.6505 6.50121V5.27216C10.6505 5.1356 10.6009 5.01766 10.5016 4.91834C10.4022 4.81903 10.2843 4.76937 10.1477 4.76937H6.83303V1.39879C6.83303 1.26223 6.78337 1.14429 6.68406 1.04497C6.58474 0.945655 6.4668 0.895996 6.33024 0.895996H4.91497C4.77841 0.895996 4.66047 0.945655 4.56115 1.04497C4.46183 1.14429 4.41218 1.26223 4.41218 1.39879V4.76937H1.07884C0.942282 4.76937 0.824343 4.81903 0.725026 4.91834C0.625708 5.01766 0.57605 5.1356 0.57605 5.27216V6.50121C0.57605 6.63777 0.625708 6.75571 0.725026 6.85503C0.824343 6.95434 0.942282 7.004 1.07884 7.004H4.41218V10.3932C4.41218 10.5298 4.46183 10.6477 4.56115 10.747C4.66047 10.8463 4.77841 10.896 4.91497 10.896H6.33024Z"
            className="fill-[var(--color-light-grayish-blue)] transition-colors duration-300 group-hover:fill-[var(--color-moderate-blue)]"
          />
        </svg>
      </button>

      <p className="text-base font-semibold text-[var(--color-moderate-blue)]">
        {voteCount}
      </p>

      <button
        aria-label="Downvote"
        onClick={handleDownvote}
        disabled={userVote === "down"}
        className="group cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-moderate-blue)]"
      >
        <svg
          width="10"
          height="3"
          viewBox="0 0 10 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25597 2.66C9.46024 2.66 9.63665 2.60445 9.78522 2.49334C9.93378 2.38223 10.0081 2.25028 10.0081 2.0975V0.722504C10.0081 0.569726 9.93378 0.437781 9.78522 0.32667C9.63665 0.215559 9.46024 0.160004 9.25597 0.160004H0.760146C0.555875 0.160004 0.379459 0.215559 0.230898 0.32667C0.0823371 0.437781 0.00805664 0.569726 0.00805664 0.722504V2.0975C0.00805664 2.25028 0.0823371 2.38223 0.230898 2.49334C0.379459 2.60445 0.555875 2.66 0.760146 2.66H9.25597Z"
            className="fill-[var(--color-light-grayish-blue)] transition-colors duration-300 group-hover:fill-[var(--color-moderate-blue)]"
          />
        </svg>
      </button>
    </div>
  );
}

export default VoteButton;
