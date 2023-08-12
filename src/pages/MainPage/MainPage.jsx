import FilterSelect from 'components/FilterSelect/FilterSelect';
import { BiSliderAlt } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  BarTitle,
  BarWrapper,
  CardsWrap,
  SelectItemWrap,
} from './MainPage.styled';
import AddBtn from 'components/AddBtn/AddBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'components/Card/Card';

const MainPage = () => {
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

  console.log(data);
  const categoryList = [
    { value: 'art', label: 'art' },
    { value: 'music', label: 'music' },
    { value: 'business', label: 'business' },
    { value: 'conference', label: 'conference' },
    { value: 'workshop', label: 'workshop' },
    { value: 'party', label: 'party' },
    { value: 'sport', label: 'sport' },
  ];

  const sortList = [
    {
      value: 'name+',
      label: (
        <SelectItemWrap>
          <p>by name</p>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'name-',
      label: (
        <SelectItemWrap>
          <p>by name</p>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
    {
      value: 'data+',
      label: (
        <SelectItemWrap>
          <p>by data</p>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'data-',
      label: (
        <SelectItemWrap>
          <p>by data</p>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
    {
      value: 'priority+',
      label: (
        <SelectItemWrap>
          <p>by priority</p>
          <FaArrowUp />
        </SelectItemWrap>
      ),
    },
    {
      value: 'priority-',
      label: (
        <SelectItemWrap>
          <p>by priority</p>
          <FaArrowDown />
        </SelectItemWrap>
      ),
    },
  ];

  const sortHolder = (
    <SelectItemWrap>
      <p>Sort by</p>
      <FiFilter />
    </SelectItemWrap>
  );
  const categoryHolder = (
    <SelectItemWrap>
      <p>Category</p>
      <BiSliderAlt />
    </SelectItemWrap>
  );

  return (
    <>
      <BarWrapper>
        <BarTitle>My events</BarTitle>
        <FilterSelect options={categoryList} holder={categoryHolder} />
        <FilterSelect options={sortList} holder={sortHolder} />
        <AddBtn />
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
