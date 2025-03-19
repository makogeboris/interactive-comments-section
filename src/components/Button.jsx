const Button = ({ type = "default", children, onClick }) => {
  const baseStyles =
    "py-3 font-semibold uppercase text-base text-white rounded-lg transition-opacity duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-60";
  const typeStyles = {
    default:
      "bg-[var(--color-moderate-blue)] px-7 focus-visible:outline-[var(--color-moderate-blue)]",
    cancel:
      "bg-[var(--color-grayish-blue)] w-full px-3 focus-visible:outline-[var(--color-grayish-blue)]",
    delete:
      "bg-[var(--color-soft-red)] w-full px-3 focus-visible:outline-[var(--color-soft-red)]",
  };

  return (
    <button className={`${baseStyles} ${typeStyles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
