import { parseKeywords } from '../utils';

describe('parseKeywords', () => {
  it('parses single keyword correctly', () => {
    const expected = 'a';
    const result = parseKeywords('a', undefined);

    expect(result).toStrictEqual(expected);
  });

  it('parses single exclude keyword correctly', () => {
    const expected = '-a';
    const result = parseKeywords(undefined, 'a');

    expect(result).toStrictEqual(expected);
  });

  it('parses multiple keyword correctly', () => {
    const expected = 'a,b,c';
    const result = parseKeywords(['a', 'b', 'c'], undefined);

    expect(result).toStrictEqual(expected);
  });

  it('parses single exclude keyword correctly', () => {
    const expected = '-a,-b,-c';
    const result = parseKeywords(undefined, ['a', 'b', 'c']);

    expect(result).toStrictEqual(expected);
  });

  it('parses both kind of keywords correctly', () => {
    const expected = 'a,b,c,-d,-e,-f';
    const result = parseKeywords(['a', 'b', 'c'], ['d', 'e', 'f']);

    expect(result).toStrictEqual(expected);
  });

  it('handles undefined parameters', () => {
    const expected = '';
    const result = parseKeywords(undefined, undefined);

    expect(result).toStrictEqual(expected);
  });
});
