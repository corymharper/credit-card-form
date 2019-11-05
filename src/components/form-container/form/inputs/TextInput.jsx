import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
 label, onChange, id, value, name, autoComplete, classes,
}) => (
  <div className={`form-container__form-input ${classes}`}>
    <label htmlFor={id}>{label}</label>
    <input id={id} onChange={onChange} value={value} name={name} autoComplete={autoComplete} />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  classes: PropTypes.string,
};

TextInput.defaultProps = {
  name: '',
  autoComplete: 'enabled',
  classes: '',
};

export default TextInput;
