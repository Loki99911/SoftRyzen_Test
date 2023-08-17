import FilterSelect from 'components/FilterSelect/FilterSelect';
import { BiSliderAlt } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  BarTitle,
  BarWrapper,
  CardsWrap,
  FilterWrapper,
  SelectHolderText,
  SelectItemText,
  SelectItemWrap,
} from './MainPage.styled';
import AddBtn from 'components/AddBtn/AddBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'components/Card/Card';
import { useMediaRules } from 'hooks/MediaRules';

const MainPage = () => {
  const { isMobile } = useMediaRules();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await axios.get(
          'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events'
        );
        setData(data);
        // return data;
      } catch (error) {
        return;
      }
    };
    getEvents();
  }, []);

  const categoryList = [
    {
      value: 'art',
      label: (
        <SelectItemWrap>
          <SelectItemText>art</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'music',
      label: (
        <SelectItemWrap>
          <SelectItemText>music</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'business',
      label: (
        <SelectItemWrap>
          <SelectItemText>business</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'conference',
      label: (
        <SelectItemWrap>
          <SelectItemText>conference</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'workshop',
      label: (
        <SelectItemWrap>
          <SelectItemText>workshop</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'party',
      label: (
        <SelectItemWrap>
          <SelectItemText>party</SelectItemText>
        </SelectItemWrap>
      ),
    },
    {
      value: 'sport',
      label: (
        <SelectItemWrap>
          <SelectItemText>sport</SelectItemText>
        </SelectItemWrap>
      ),
    },
  ];

  const sortList = [
    {
      value: 'name+',
      label: (
        <SelectItemWrap>
          <SelectItemText>by name</SelectItemText>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'name-',
      label: (
        <SelectItemWrap>
          <SelectItemText>by name</SelectItemText>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
    {
      value: 'data+',
      label: (
        <SelectItemWrap>
          <SelectItemText>by data</SelectItemText>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'data-',
      label: (
        <SelectItemWrap>
          <SelectItemText>by data</SelectItemText>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
    {
      value: 'priority+',
      label: (
        <SelectItemWrap>
          <SelectItemText>by priority</SelectItemText>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'priority-',
      label: (
        <SelectItemWrap>
          <SelectItemText>by priority</SelectItemText>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
  ];

  const sortHolder = (
    <SelectItemWrap>
      {!isMobile && <SelectHolderText>Sort by</SelectHolderText>}
      <FiFilter />
    </SelectItemWrap>
  );

  const categoryHolder = (
    <SelectItemWrap>
      {!isMobile && <SelectHolderText>Category</SelectHolderText>}
      <BiSliderAlt />
    </SelectItemWrap>
  );

  return (
    <>
      <BarWrapper>
        {!isMobile && <BarTitle>My events</BarTitle>}
        <FilterWrapper>
          <FilterSelect options={categoryList} holder={categoryHolder} />
          <FilterSelect options={sortList} holder={sortHolder} />
          <AddBtn />
        </FilterWrapper>
      </BarWrapper>
      <CardsWrap>
        {data.map(obj => (
          <Card card={obj} key={obj.id} />
        ))}
      </CardsWrap>
    </>
  );
};

export default MainPage;
