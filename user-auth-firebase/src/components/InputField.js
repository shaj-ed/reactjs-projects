const InputField = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className=" border-0 outline-0 px-4 py-2 text-white bg-cyan-600  placeholder:text-cyan-200 placeholder:text-sm cursor-pointer hover:bg-cyan-700"
      required
    />
  );
};

export default InputField;
