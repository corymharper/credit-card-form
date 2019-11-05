import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './inputs/TextInput';

const CardDetailsForm = ({ handleChange, handleSubmit, data }) => (
  <form onSubmit={handleSubmit}>
    <TextInput label="Card Number" id="cardNumber" onChange={handleChange} value={data.cardNumber} />
  </form>
);

CardDetailsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
  }).isRequired,
};

export default CardDetailsForm;
