import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, onChange, id, value }) => (
  <div className="form-container__form-input">
    <label htmlFor={id}>{label}</label>
    <input id={id} onChange={onChange} value={value} />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
