export default (id, value) => {
  let derivedValue = value;
  switch (id) {
    case 'cardNumber':
      for (let i = 0; i < derivedValue.length; i += 1) {
        if ((i === 4 || i === 9 || i === 14) && derivedValue[i] !== ' ') derivedValue = `${derivedValue.slice(0, i)} ${derivedValue.slice(i)}`;
      }
      if (derivedValue.length > 19) derivedValue = derivedValue.slice(0, 19);
      break;
    default:
      console.log('you have reached a default state');
  }
  return derivedValue;
};
