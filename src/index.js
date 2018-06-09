'use strict';

export const calculateNotes = (value) => {
  const notes = [100, 50, 20, 10];
  const minNote = notes[notes.length - 1];

  if (value % minNote === 0)
    return notes.map(index => {
        let originalValue = value;
        value = value - Math.floor(value / index) * index;
        return Math.floor(originalValue / index);
      }
    );
  if (value === null)
    return [];

  return 'throw InvalidArgumentException';
};
export default calculateNotes;