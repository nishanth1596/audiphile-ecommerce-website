type InputProps = {
  id: string;
  title: string;
  inputType: string;
  placeholder: string;
  marginTop?: string;
};

function Input({ id, title, inputType, placeholder, marginTop }: InputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className="inline-block text-xs leading-4 font-bold tracking-[-0.21px]"
        style={{ marginTop: marginTop }}
      >
        {title}
      </label>
      <input
        type={inputType}
        // type=""
        placeholder={placeholder}
        className="border-MediumGray text-Black/40 mt-[9px] block w-full rounded-lg border-[1px] pt-[18px] pb-[19px] pl-6 text-sm leading-[1.19rem] font-bold tracking-[-0.25px]"
      />
    </>
  );
}

export default Input;
