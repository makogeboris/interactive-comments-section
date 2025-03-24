import { useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Reply from "./Reply";
import NewComment from "./NewComment";
import Modal from "./Modal";

function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [replyToDelete, setReplyToDelete] = useState(null);
  const [newComments, setNewComments] = useState([]);
  const [replies, setReplies] = useState([
    {
      id: 1,
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    },
  ]);

  function handleEditReply(id, updatedText) {
    setReplies((prev) =>
      prev.map((reply) =>
        reply.id === id ? { ...reply, content: updatedText } : reply,
      ),
    );
  }

  function handleDeleteReply() {
    setReplies((prev) => prev.filter((reply) => reply.id !== replyToDelete));
    setIsModalOpen(false);
  }

  function handleAddComment(text) {
    const newComment = {
      id: Date.now(),
      avatar: "/avatars/image-juliusomo.png",
      timestamp: "Just now",
      content: text,
      isEditing: false,
    };
    setNewComments((prev) => [...prev, newComment]);
  }

  function handleDelete() {
    setNewComments((prev) =>
      prev.filter((comment) => comment.id !== commentToDelete),
    );
    setIsModalOpen(false);
  }

  function handleEdit(id) {
    setNewComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, isEditing: !comment.isEditing }
          : comment,
      ),
    );
  }

  function handleSave(id, updatedText) {
    setNewComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, content: updatedText, isEditing: false }
          : comment,
      ),
    );
  }

  function confirmDelete(id) {
    setCommentToDelete(id);
    setReplyToDelete(id);
    setIsModalOpen(true);
  }

  return (
    <div className="mx-auto w-full max-w-[45.625rem] space-y-4 md:space-y-5">
      <Comment
        user="amyrobson"
        avatar="/avatars/image-amyrobson.png"
        timestamp="1 month ago"
        content="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        votes="12"
      />
      <Comment
        user="maxblagun"
        avatar="/avatars/image-maxblagun.png"
        timestamp="2 weeks ago"
        content="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
        votes="5"
      />

      <div className="mt-4 flex gap-4 sm:gap-11 sm:pl-11 md:mt-5">
        <div className="w-0.5 bg-[var(--color-light-gray)]"></div>
        <div className="w-full space-y-4 md:space-y-5">
          <Comment
            user="ramsesmiron"
            avatar="/avatars/image-ramsesmiron.png"
            timestamp="1 week ago"
            content="If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first."
            votes="4"
          />

          {replies.map((reply) => (
            <Reply
              key={reply.id}
              content={reply.content}
              setIsModalOpen={setIsModalOpen}
              onEdit={() => handleEditReply(reply.id)}
              onSave={(updatedText) => handleEditReply(reply.id, updatedText)}
              onDelete={() => confirmDelete(reply.id)}
            />
          ))}
        </div>
      </div>

      {newComments.map((comment) => (
        <NewComment
          key={comment.id}
          avatar={comment.avatar}
          timestamp={comment.timestamp}
          content={comment.content}
          isEditing={comment.isEditing}
          onDelete={() => confirmDelete(comment.id)}
          onEdit={() => handleEdit(comment.id)}
          onSave={(updatedText) => handleSave(comment.id, updatedText)}
        />
      ))}

      <AddComment onAddComment={handleAddComment} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
        onDeleteReply={handleDeleteReply}
      />
    </div>
  );
}

export default Container;
