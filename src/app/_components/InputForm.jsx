export default function InputForm({
  type = "text",
  label = "Label",
  placeholder = "",
  req = false,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={type} className="text-accent-secondary font-extrabold">
        {label}
      </label>
      <input
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        required={req}
        className=" w-full border rounded-4xl ring-1 focus:outline-accent-secondary p-2"
      />
    </div>
  );
}
