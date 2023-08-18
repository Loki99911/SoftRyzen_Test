import styled from 'styled-components';
import Select from 'react-select';

export const SelectInput = styled(Select)`
  .Form__control {
    font-size: 16px;
    line-height: 1;
    font-weight: 500;

    width: 69px;
    height: 48px;
    border-radius: 8px;
    background-color: #ffffff;
    outline: none;
    border: none;
  }

  .Form__input {
    color: transparent !important;
  }

  .Form__indicator-separator {
    display: none;
  }

  .Form__indicator {
    padding: 8px 8px 8px 0;
  }

  .Form__value--container {
    padding: 2px 0px 2px 8px;
  }

  .Form__single-value {
    color: var(--main-black);
    overflow: visible;
  }

  .Form__defaultValue,
  .Form__indicator {
    color: var(--main-black);
  }

  .Form__menu {
    padding: 16px 12px;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .Form__menu-list {
    padding: 0;
    list-style: none;
    text-align: left;
  }

  .Form__option {
    padding: 4px 0;
    background-color: transparent;
    color: var(--main-gray);
    border-bottom: 1px solid var(--main-gray);
    cursor: pointer;
  }
`;
