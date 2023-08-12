import { FiPlus } from 'react-icons/fi';
import { AddButtonStyled } from './AddBtn.styled';

const AddBtn = () => {
  return (
    <AddButtonStyled>
      <FiPlus />
      <span>Add new event</span>
    </AddButtonStyled>
  );
};

export default AddBtn;
