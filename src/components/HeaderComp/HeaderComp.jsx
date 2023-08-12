import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { HeaderElem, HeaderInput, HeaderTitle, HeaderWrapper, InputWrapper, SearchBtn } from './HeaderComp.styled';
import { useState } from 'react';
import LangSelect from 'components/LangSelect/LangSelect';
import { FiSearch } from 'react-icons/fi';

export const HeaderComp = () => {
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
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
            <SearchBtn onClick={searchEvent}><FiSearch size={24}/></SearchBtn>
          </InputWrapper>
          <LangSelect/>
        </HeaderWrapper>
      </Container>
    </HeaderElem>
  );
};
