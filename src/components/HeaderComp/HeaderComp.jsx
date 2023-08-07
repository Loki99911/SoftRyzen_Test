import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { HeaderElem, HeaderInput, HeaderTitle, HeaderWrapper, InputWrapper, SearchBtn } from './HeaderComp.styled';
import { useState } from 'react';
import LangSelect from 'components/LangSelect/LangSelect';

export const HeaderComp = () => {
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  
  const searchEvent = e => {
    console.log("SEARCH!!!");
  };

  
  return (
    <HeaderElem>
      <Container>
        <HeaderWrapper>
          <HeaderTitle>Event Planner</HeaderTitle>
          <InputWrapper>
            <HeaderInput
              type="text"
              placeholder="Search by keywords"
              value={search}
              onChange={searchChange}
              onKeyDown={searchEvent}
            />
            <SearchBtn onClick={searchEvent}>Ф</SearchBtn>
          </InputWrapper>
          <LangSelect/>
        </HeaderWrapper>
      </Container>
    </HeaderElem>
  );
};
