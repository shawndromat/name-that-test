import isValidIceCream from 'src/isValidIceCream';

describe('isValidIceCream', () => {
  it('??????????', () => {
    const validIceCream = {
      name: 'Americone Dream'
    };
    expect(isValidIceCream(validIceCream)).toEqual(true);

    const invalidIceCream = {
      name: 'Stephen Colbert\'s Americone Dream ✌️'
    };
    expect(isValidIceCream(invalidIceCream)).toEqual(false);
  });
});
