import React, { useState } from 'react';
import CardDetailsForm from './form/CardDetailsForm';
import cardValidations from '../../utils/cardValidations';

const FormContainer = () => {
  const [data, setData] = useState({
    cardNumber: '',
    cardHolder: '',
    month: '',
    year: '',
    cvv: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    const validatedValue = cardValidations(id, value);

    setData({
      ...data,
      [id]: validatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you clicked submit');
  };

  return (
    <div className="form-container shadow surface">
      <CardDetailsForm data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormContainer;
