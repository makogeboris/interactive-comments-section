import Button from "./Button";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.2)] px-4 backdrop-blur-[2px] transition-all duration-500"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[25rem] space-y-4 rounded-lg bg-white px-6 py-7 md:space-y-5 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl font-medium text-[var(--color-dark-blue)]">
          Delete comment
        </p>

        <p className="text-base font-normal text-[var(--color-grayish-blue)]">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>

        <div className="flex items-center gap-3 md:gap-3.5">
          <Button type="cancel" onClick={onClose}>
            No, Cancel
          </Button>
          <Button type="delete" onClick={onClose}>
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
