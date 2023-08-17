import { BsArrowLeft } from 'react-icons/bs';
import {
  BackBtn,
  CreateEventWrapper,
  CreateTitle,
} from './CreateEventPage.styled';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const goBack = () => {navigate(-1)};
  return (
    <>
      <CreateEventWrapper>
        <BackBtn onClick={goBack}>
          <BsArrowLeft />
          Back
        </BackBtn>
        <CreateTitle>Create new event</CreateTitle>
      </CreateEventWrapper>
    </>
  );
};

export default CreateEventPage;
