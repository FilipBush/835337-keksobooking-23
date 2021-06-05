//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandom = (min, max, exp) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min);
  const expon = Math.pow(10, exp);

  return (Math.round(random * expon) / expon);
};
getRandom (1, 7, 10);

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomRound = (min, max) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min + 1);

  return Math.floor(random);
};
getRandomRound (1, 9);
