import styled from 'styled-components';
import Select from 'react-select';

export const SelectInput = styled(Select)`
  .Filter__control {
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    min-width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    outline: none;
    border: none;
    &.Filter__control--menu-is-open {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      color: var(--main-blue);
      width: 170px;
      .Filter__placeholder {
        color: var(--main-blue);
      }
    }
  }

  .Filter__placeholder {
    color: var(--main-black);
    margin: 0 auto;
  }

  .Filter__input {
    color: transparent !important;
  }

  .Filter__indicator-separator {
    display: none;
  }

  .Filter__indicator {
  padding: 8px 8px 8px 0;
  }

  .Filter__value--container {
  padding: 2px 0px 2px 8px;
  }

  .Filter__single-value {
    color: var(--main-blue);
    overflow: visible;
  }

  .Filter__defaultValue,
  .Filter__indicator {
    color: var(--main-black);
  }

  .Filter__menu {
    font-size: 14px;
    margin: 0;
    border: none;
    padding: 0;
    background-color: #ffffff;
    border-radius: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .Filter__menu-list {
    max-height: 100%;
    border: none;
    padding: 0;
    list-style: none;
    text-align: left;
    & :not(:last-of-type) {
      border-bottom: 1px solid var(--main-gray);
    }
  }

  .Filter__option {
    padding-left:0;
    padding-right: 0;
    background-color: transparent;
    color: var(--main-gray);
    cursor: pointer;
    &:hover {
      color: var(--main-blue);
    }
  }
  .Filter__dropdown-indicator {
    display: none;
  }
`;
