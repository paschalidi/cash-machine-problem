const expect = require('chai').expect;
import calculateNotes from '.';


describe('calculate(null)',
  () => it('should return: []',
    () => {
      expect(calculateNotes(null)).to.be.an('array');
    })
);
describe('calculateNotes(5)',
  () => it('should return: throw InvalidArgumentException',
    () => {
      expect(calculateNotes(5)).to.be.an('string');
    })
);
describe('calculate(0)',
  () => it('should return: [0,0,0,0]',
    () => {
      expect(calculateNotes(0)).to.have.ordered.members([0, 0, 0, 0]);
    })
);
describe('calculate(100)',
  () => it('should return [1,0,0,0]',
    () => {
      expect(calculateNotes(100)).to.have.ordered.members([1, 0, 0, 0]);
    })
);
describe('calculate(550)',
  () => it('should return [5,1,0,0]',
    () => {
      expect(calculateNotes(550)).to.have.ordered.members([5, 1, 0, 0]);
    })
);
describe('calculate(1550)',
  () => it('should return [15,1,0,0]',
    () => {
      expect(calculateNotes(550)).to.have.ordered.members([5, 1, 0, 0]);
    })
);
describe('calculate(1570)',
  () => it('should return [15,1,1,0]',
    () => {
      expect(calculateNotes(570)).to.have.ordered.members([5, 1, 1, 0]);
    })
);
describe('calculate(580)',
  () => it('should return [5,1,1,1]',
    () => {
      expect(calculateNotes(580)).to.have.ordered.members([5, 1, 1, 1]);
    })
);
describe('calculate(580)',
  () => it('should return [5,1,2,0]',
    () => {
      expect(calculateNotes(590)).to.have.ordered.members([5, 1, 2, 0]);
    })
);
describe('calculate(-10)',
  () => it('should return: throw InvalidArgumentException',
    () => {
      expect(calculateNotes(-10)).to.be.an('string');
    })
);
