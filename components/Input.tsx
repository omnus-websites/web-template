type InputProps = {
  name: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const Input = ({ name, label, value, setValue }: InputProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);
  return (
    <div className="relative flex flex-col input-container">
      <input
        name={name}
        value={value}
        onChange={handleChange}
        className="border-black border-2 pt-5 px-4 pb-2"
      />
      <label
        htmlFor={name}
        className={`absolute pointer-events-none transform translate-x-4 translate-y-[18px] scale-100 origin-top-left duration-200 ease-out text-grey1 font-base ${
          value && "filled"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
