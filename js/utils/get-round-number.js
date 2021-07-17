const roundNumber = (number, exp) => {
  const expon = Math.pow(10, exp);
  return (Math.round(number * expon) / expon);
};

export {roundNumber};


