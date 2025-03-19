function ActionButton({ type = "default", children, onClick }) {
  const baseStyles =
    "group flex cursor-pointer items-center gap-2 rounded-sm text-base font-semibold transition-opacity duration-300 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4";
  const typeStyles = {
    default:
      "text-[var(--color-moderate-blue)] focus-visible:outline-[var(--color-moderate-blue)]",
    delete:
      "text-[var(--color-soft-red)] focus-visible:outline-[var(--color-soft-red)]",
  };

  return (
    <button className={`${baseStyles} ${typeStyles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ActionButton;
