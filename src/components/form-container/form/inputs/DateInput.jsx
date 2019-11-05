import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const DateInput = ({
  onChange, monthValue, dayValue,
}) => {
  const currentYear = new Date().getFullYear();
  const monthOptions = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const yearOptions = [];
  for (let i = currentYear; i < currentYear + 20; i += 1) {
    console.log(i, currentYear);
    yearOptions.push(i);
  }

  return (
    <div className="form-container__form-date-input">
      <label htmlFor="month">Expiration Date</label>
      <select id="month" onChange={onChange} value={monthValue} className="form-container__form-date-input-select">
        {monthOptions.map((month) => <option value={month} key={month}>{month}</option>)}
      </select>
      <select id="day" onChange={onChange} value={dayValue} className="form-container__form-date-input-select">
        {yearOptions.map((year) => <option value={year} key={year}>{year}</option>)}
      </select>
    </div>
  );
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  monthValue: PropTypes.string.isRequired,
  dayValue: PropTypes.string.isRequired,
};

export default DateInput;
