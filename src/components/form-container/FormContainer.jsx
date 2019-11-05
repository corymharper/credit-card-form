import React, { useState } from 'react';
import CardDetailsForm from './form/CardDetailsForm';

const FormContainer = () => {
  const [data, setData] = useState({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    console.log(id, value);

    setData({
      ...data,
      [id]: value,
    });
  };

  return (
    <div className="form-container shadow surface">
      <CardDetailsForm data={data} handleChange={handleChange} />
    </div>
  );
};

export default FormContainer;
