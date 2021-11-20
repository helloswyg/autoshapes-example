import * as grammar from './grammar';

test('decode returns a node that has type property', () => {
  const code = 'BaBa';
  const tree = grammar.decodePathString(code);

  expect(tree).toHaveProperty('type');
});

test('decode returns a tree with the correct number of nodes', () => {
  const treeLengths: Record<string, number> = {
    BaBa: 5, // 5 because it's a binary tree and null nodes are added
    BcBbc: 5,
    BcBc: 5,
    BcBcIaa: 7,
  };
  const codes = Object.keys(treeLengths);

  codes.forEach((code) => {
    const tree = grammar.decodePathString(code);
    expect(grammar.countNodes(tree)).toEqual(treeLengths[code]);
  });
});
