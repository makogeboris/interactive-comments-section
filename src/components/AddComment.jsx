import Textarea from "./Textarea";
import Button from "./Button";
import avatar from "../assets/avatars/image-juliusomo.png";

function AddComment() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 sm:flex-row sm:items-start sm:p-6">
      <img className="hidden size-8 sm:block sm:size-10" src={avatar} alt="" />

      <Textarea />

      <div className="flex flex-wrap items-center justify-between sm:hidden">
        <img className="size-8 sm:size-10" src={avatar} alt="" />
        <Button type="default">Send</Button>
      </div>

      <div className="hidden sm:block">
        <Button type="default">Send</Button>
      </div>
    </div>
  );
}

export default AddComment;
