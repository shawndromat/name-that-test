import isValidIceCream from 'src/isValidIceCream';

describe('isValidIceCream', () => {
  it('??????????', () => {
    const validIceCream = {
      name: 'Mint Chocolate Chip',
      mixins: []
    };

    expect(isValidIceCream(validIceCream)).toEqual(true);

    const invalidIceCream = {
      name: 'Stephen Colbert\'s Americone Dream'
    };

    expect(isValidIceCream(invalidIceCream)).toEqual(false);
  });
});
