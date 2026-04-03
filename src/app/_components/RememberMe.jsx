export default function RememberMe() {
  return (
    <div className="flex gap-1 ">
      <input
        type="checkbox"
        name="recordarme"
        id="recordarme"
        className="cursor-pointer"
      />
      <label htmlFor="recordarme" className="text-sm cursor-pointer">
        Recordarme
      </label>
    </div>
  );
}
