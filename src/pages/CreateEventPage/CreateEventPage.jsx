import { BsArrowLeft } from 'react-icons/bs';
import {
  BackBtn,
  CreateEventWrapper,
  CreateTitle,
} from './CreateEventPage.styled';
import { useNavigate } from 'react-router-dom';
import { FormComp } from 'components/FormComp/FormComp';

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
        <FormComp/>
      </CreateEventWrapper>
    </>
  );
};

export default CreateEventPage;
