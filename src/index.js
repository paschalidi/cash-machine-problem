'use strict';

export default (value) => {
  const notes = [100, 50, 20, 10];
  const minNote = notes[notes.length - 1];

  if (value % minNote === 0 && value >= 0)
    return notes.map(index => {
        let originalValue = value;
        value = value - getIntFromDivision(value, index);
        return getIntFromDivision(originalValue, index);
      }
    );

  if (value === null)
    return [];

  return 'throw InvalidArgumentException';
};

const getIntFromDivision = (number, divisor) => Math.floor(number / divisor) * divisor;

