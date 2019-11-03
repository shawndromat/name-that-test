import isValidIceCream from 'src/isValidIceCream';

describe('isValidIceCream', () => {
  it('name must be 24 characters or less', () => {
    const name = stringOfLength(24);
    const validIceCream = { name };
    expect(isValidIceCream(validIceCream)).toEqual(true);

    const longName = stringOfLength(25);
    const invalidIceCream = { name: longName };
    expect(isValidIceCream(invalidIceCream)).toEqual(false);
  });
});

const stringOfLength = length => Array(length).fill('a').join('');
