const getRandomFloat = (min, max, exp) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min);
  const expon = Math.pow(10, exp);

  return (Math.round(random * expon) / expon);
};

export {getRandomFloat};
