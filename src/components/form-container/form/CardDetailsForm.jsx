import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';

const CardDetailsForm = ({ handleChange, handleSubmit, data }) => (
  <form onSubmit={handleSubmit}>
    <TextInput label="Card Number" id="cardNumber" onChange={handleChange} value={data.cardNumber} name="cardnumber" autoComplete="off" />
    <TextInput label="Card Holder" id="cardHolder" onChange={handleChange} value={data.cardHolder} />
    <div className="form-container__form-row">
      <DateInput yearValue={data.year} monthValue={data.month} onChange={handleChange} />
      <TextInput label="CVV" id="cvv" onChange={handleChange} value={data.cvv} classes="form-container__form-cvv-input" />
    </div>
    <button type="submit" className="form-container__form-submit-button shadow">Submit</button>
  </form>
);

CardDetailsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    cardNumber: PropTypes.string,
    cardHolder: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
    cvv: PropTypes.string,
  }).isRequired,
};

export default CardDetailsForm;
