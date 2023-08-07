import { SelectInput } from "./LangSelect.styled";

const LangSelect = () => {
  const options = [
    { value: 'EN', label: 'EN' },
    { value: 'UA', label: 'UA' },
  ];
  return (
    <SelectInput
      classNamePrefix="Select"
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default LangSelect;
