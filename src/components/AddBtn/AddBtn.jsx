import { FiPlus } from 'react-icons/fi';
import { AddButtonStyled } from './AddBtn.styled';
import { useMediaRules } from 'hooks/MediaRules';

const AddBtn = () => {
  
  const { isMobile } = useMediaRules();
  return (
    <AddButtonStyled to={'create'}>
      <FiPlus />
      {!isMobile && <span>Add new event</span>}
    </AddButtonStyled>
  );
};

export default AddBtn;
