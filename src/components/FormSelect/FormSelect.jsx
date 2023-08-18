import { SelectInput } from './FormSelect.styled';
const FormSelect = ({ options, holder, onChange }) => {
  return (
    <SelectInput
      classNamePrefix="Form"
      placeholder={holder}
      options={options}
      onChange={onChange}
    />
  );
};

export default FormSelect;
