import { useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import NewComment from "./NewComment";
import Reply from "./Reply";
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
      isEditing: false,
    },
  ]);

  const [commentReplies, setCommentReplies] = useState({
    amyrobson: [],
    maxblagun: [],
    ramsesmiron: [],
  });

  function handleEditReply(replyId, updatedText = null) {
    setReplies((prev) =>
      prev.map((reply) => {
        if (reply.id === replyId) {
          if (updatedText === null) {
            return { ...reply, isEditing: !reply.isEditing };
          } else {
            return { ...reply, content: updatedText, isEditing: false };
          }
        }
        return reply;
      }),
    );
  }

  function handleDeleteReply(replyId) {
    setReplies((prev) => prev.filter((reply) => reply.id !== replyId));
    setIsModalOpen(false);
  }

  function handleEditCommentReply(username, replyId, updatedText = null) {
    setCommentReplies((prev) => {
      const updatedReplies = prev[username].map((reply) => {
        if (reply.id === replyId) {
          if (updatedText === null) {
            return { ...reply, isEditing: !reply.isEditing };
          } else {
            return { ...reply, content: updatedText, isEditing: false };
          }
        }
        return reply;
      });

      return { ...prev, [username]: updatedReplies };
    });
  }

  function handleDeleteCommentReply(username, replyId) {
    setCommentReplies((prev) => ({
      ...prev,
      [username]: prev[username].filter((reply) => reply.id !== replyId),
    }));
    setIsModalOpen(false);
  }

  function handleAddReply(username, text) {
    const newReply = {
      id: Date.now(),
      avatar: "/avatars/image-juliusomo.png",
      timestamp: "Just now",
      content: `@${username} ${text}`,
      isEditing: false,
      user: "juliusomo",
      replyingTo: username,
    };

    setCommentReplies((prev) => ({
      ...prev,
      [username]: [...(prev[username] || []), newReply],
    }));
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
    setCommentToDelete(null);
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

  function confirmDelete(
    id,
    isReply = false,
    username = null,
    isOriginalReply = false,
  ) {
    if (isOriginalReply) {
      setReplyToDelete(id);
    } else if (isReply) {
      setReplyToDelete({ id, username });
    } else {
      setCommentToDelete(id);
    }
    setIsModalOpen(true);
  }

  const handleModalDelete = () => {
    if (typeof replyToDelete === "number") {
      handleDeleteReply(replyToDelete);
    } else if (replyToDelete && replyToDelete.username) {
      handleDeleteCommentReply(replyToDelete.username, replyToDelete.id);
    } else {
      handleDelete();
    }
    setIsModalOpen(false);
    setReplyToDelete(null);
  };

  return (
    <div className="mx-auto w-full max-w-[45.625rem] space-y-4 md:space-y-5">
      <Comment
        user="amyrobson"
        avatar="/avatars/image-amyrobson.png"
        timestamp="1 month ago"
        content="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        votes="12"
        onReply={(text) => handleAddReply("amyrobson", text)}
        replies={commentReplies["amyrobson"]}
        onReplyDelete={(replyId) => confirmDelete(replyId, true, "amyrobson")}
        onReplyEdit={(replyId, updatedText) =>
          handleEditCommentReply("amyrobson", replyId, updatedText)
        }
      />
      <Comment
        user="maxblagun"
        avatar="/avatars/image-maxblagun.png"
        timestamp="2 weeks ago"
        content="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
        votes="5"
        onReply={(text) => handleAddReply("maxblagun", text)}
        replies={commentReplies["maxblagun"]}
        onReplyDelete={(replyId) => confirmDelete(replyId, true, "maxblagun")}
        onReplyEdit={(replyId, updatedText) =>
          handleEditCommentReply("maxblagun", replyId, updatedText)
        }
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
            onReply={(text) => handleAddReply("ramsesmiron", text)}
            replies={commentReplies["ramsesmiron"]}
            onReplyDelete={(replyId) =>
              confirmDelete(replyId, true, "ramsesmiron")
            }
            onReplyEdit={(replyId, updatedText) =>
              handleEditCommentReply("ramsesmiron", replyId, updatedText)
            }
          />

          {replies.map((reply) => (
            <Reply
              key={reply.id}
              content={reply.content}
              isEditing={reply.isEditing}
              setIsModalOpen={setIsModalOpen}
              onEdit={() => handleEditReply(reply.id)}
              onSave={(updatedText) => handleEditReply(reply.id, updatedText)}
              onDelete={() => confirmDelete(reply.id, true, null, true)}
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
        onDelete={handleModalDelete}
      />
    </div>
  );
}

export default Container;
