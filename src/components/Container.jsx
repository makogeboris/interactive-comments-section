import AddComment from "./AddComment";
import Comment from "./Comment";
import Reply from "./Reply";

function Container({ setIsModalOpen }) {
  return (
    <div className="mx-auto w-full max-w-[45.625rem] space-y-4 md:space-y-5">
      <Comment />
      <Comment />

      <div className="flex gap-4 sm:gap-11 sm:pl-11">
        <Line />

        <div className="space-y-4 md:space-y-5">
          <Comment />
          <Reply setIsModalOpen={setIsModalOpen} />
        </div>
      </div>

      <AddComment />
    </div>
  );
}

export default Container;

function Line() {
  return <div className="w-0.5 bg-[var(--color-light-gray)]"></div>;
}
