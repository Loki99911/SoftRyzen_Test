import { SelectInput } from './FilterSelect.styled';
const FilterSelect = ({options,holder}) => {
  
  return (
    <SelectInput
      classNamePrefix="Filter"
      placeholder={holder}
      options={options}
      //   onChange={}
    />
  );
};

export default FilterSelect;
