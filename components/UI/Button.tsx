export default function Button({ children }: any) {
  return (
    <button
      type="button"
      className="py-2 px-4 bg-neutral-1000 text-white rounded-xl cursor-pointer hover:bg-neutral-900 active:bg-neutral-800"
    >
      {children}
    </button>
  );
}
