import FormSelect from 'components/FormSelect/FormSelect';
import { useState } from 'react';
import { FormWrapper, InputWrapper } from './FormComp.styled';

export const FormComp = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    img: '',
    priority: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted data:', formData);
  };

  const category = [
    { value: 'art', label: 'art' },
    { value: 'music', label: 'music' },
    { value: 'business', label: 'business' },
    { value: 'conference', label: 'conference' },
    { value: 'workshop', label: 'workshop' },
    { value: 'party', label: 'party' },
    { value: 'sport', label: 'sport' },
  ];
  const priority = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ];
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Please, input title"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Please, input description"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="date">Select date</label>
          {/* <input
          type="text"
          id="date"
          name="date"
          placeholder="Please, input date"
          onChange={handleInputChange}
        /> */}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="time">Select time</label>
          {/* <input
          type="text"
          id="time"
          name="time"
          placeholder="Please, input time"
          onChange={handleInputChange}
        /> */}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Please, input Location"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="category">Category</label>
          <FormSelect
            options={category}
            holder="Please, select category"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper></InputWrapper>
        <InputWrapper>
          <label htmlFor="priority">Priority</label>
          <FormSelect
            options={priority}
            holder="Please, select priority"
            onChange={handleInputChange}
          />
        </InputWrapper>
        <button>Click</button>
      </FormWrapper>
    </>
  );
};
