export default function ButtonForm({ children }) {
  return (
    <button
      type="button"
      className="w-full cursor-pointer bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4"
    >
      {children}
    </button>
  );
}
