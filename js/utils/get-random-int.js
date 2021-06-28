const getRandomInt = (min, max) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min + 1);

  return Math.floor(random);
};

export {getRandomInt};
