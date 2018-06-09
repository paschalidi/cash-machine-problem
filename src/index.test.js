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
  () => it('should return [100, 0, 0, 0]',
    () => {
      expect(calculateNotes(100)).to.have.ordered.members([100, 0, 0, 0]);
    })
);
describe('calculate(550)',
  () => it('should return [500, 50, 0, 0]',
    () => {
      expect(calculateNotes(550)).to.have.ordered.members([500, 50, 0, 0]);
    })
);
describe('calculate(1570)',
  () => it('should return [500, 50, 20, 0]',
    () => {
      expect(calculateNotes(570)).to.have.ordered.members([500, 50, 20, 0]);
    })
);
describe('calculate(580)',
  () => it('should return [500, 50, 20, 10]',
    () => {
      expect(calculateNotes(580)).to.have.ordered.members([500, 50, 20, 10]);
    })
);
describe('calculate(590)',
  () => it('should return [500, 50, 20, 0]',
    () => {
      expect(calculateNotes(590)).to.have.ordered.members([500, 50, 40, 0]);
    })
);
describe('calculate(-10)',
  () => it('should return: throw InvalidArgumentException',
    () => {
      expect(calculateNotes(-10)).to.be.an('string');
    })
);
