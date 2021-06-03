//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandom (min, max) {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }
  const random = min + Math.random() * (max - min);
  return random;
}
getRandom (-1, -10);

//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomRound (min, max) {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
}
getRandomRound (1, 9);
