function Textarea({ value, onChange }) {
  return (
    <textarea
      className="w-full resize-none rounded-lg border border-[var(--color-light-gray)] bg-white p-3 px-6 text-base font-normal text-[var(--color-grayish-blue)] focus-visible:outline-2 focus-visible:outline-[var(--color-moderate-blue)]"
      rows={3}
      name="comment"
      id="comment"
      placeholder="Add a comment…"
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default Textarea;
