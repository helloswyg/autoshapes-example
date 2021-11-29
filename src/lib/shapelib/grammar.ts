/* 
Define a grammar for lines and write an interpreter 

Compose a line from a binary tree. Each node in the tree acts as a modifier applied to the concatenation of it's children.

The unit operator is allowed as a modifier.
*/

import { PathArray } from '@svgdotjs/svg.js';
import { library, utils } from '.';
import { pathCompose } from './utils';
import seedrandom from 'seedrandom';

export type Line = PathArray;
export type ModifierFunc = (l: Line) => Line;

export enum NodeTypes {
  MODIFIER,
  ATOM,
}

export interface ModifierNode {
  type: NodeTypes.MODIFIER;
  modifier: ModifierFunc;
  children: Node[];
}

export interface AtomNode {
  type: NodeTypes.ATOM;
  atom: Line;
}

export type Node = AtomNode | ModifierNode;

export function isAtom(node: Node): node is AtomNode {
  return node.type === NodeTypes.ATOM;
}

export function isModifier(node: Node): node is ModifierNode {
  return node.type === NodeTypes.MODIFIER;
}

export function createNullAtom(): AtomNode {
  return {
    type: NodeTypes.ATOM,
    atom: new PathArray(),
  };
}

export function evaluateTree(node: Node): Line {
  if (isAtom(node)) return node.atom;
  return node.modifier(pathCompose(node.children.map(evaluateTree)));
}

export const modifierVocabulary: Record<string, ModifierFunc> = {
  S: utils.small,
  L: utils.big,
  B: utils.bend,
  // N: utils.noise,
  F: (l) => utils.pathCompose([library.connector, utils.flipY(l)]),
  I: (l) => l,
};

/* 
Atoms with starting points at 45deg and end points at -45deg. 
These can be chained if one is flipped vertically
*/
const symmetricAtoms: Record<string, Line> = {
  a: library.loop,
  b: library.crest,
  c: library.connector,
};

/*
To construct atoms that are chanable without flipping, we can use the atoms from above. 
We will generate all combinations.
*/
export const atomVocabulary: Record<string, Line> = (() => {
  const allAtoms: Record<string, Line> = {};
  let counter = 0;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const key1 in symmetricAtoms) {
    for (const key2 in symmetricAtoms) {
      allAtoms[alphabet[counter]] = pathCompose([symmetricAtoms[key1], utils.flipY(symmetricAtoms[key2])]);
      counter++;
    }
  }
  return allAtoms;
})();

/* 
for a tutoral on decoding trees see: https://en.wikipedia.org/wiki/Binary_tree#Succinct_encodings
*/
export function decodePathString(input: string): Node {
  let position = 0;
  if (!input) return createNullAtom();

  const tree = (function next(): Node | null {
    const word = input[position++];
    if (word && word in modifierVocabulary) {
      const left = next() || createNullAtom();
      const right = next() || createNullAtom();
      const node: ModifierNode = {
        type: NodeTypes.MODIFIER,
        modifier: modifierVocabulary[word],
        children: [left, right],
      };

      return node;
    }
    if (word && word in atomVocabulary) {
      const node: AtomNode = {
        type: NodeTypes.ATOM,
        atom: atomVocabulary[word],
      };

      return node;
    }

    return null;
  })();

  if (tree === null) throw new Error('bad tree');

  return tree;
}

export function countNodes(node: Node): number {
  if (isAtom(node)) return 1;
  return node.children.map(countNodes).reduce((a, b) => a + b) + 1;
}

function choice<T>(arr: T[], seed?: string): T {
  const rng = seedrandom(seed);
  return arr[Math.floor(rng() * arr.length)];
}

export function generateLinish(numModifiers: number): string {
  const modifierSet = Object.keys(modifierVocabulary);
  const atomSet = Object.keys(atomVocabulary);
  let output = (function next(depth: number): string {
    if (depth >= numModifiers) return choice(atomSet);
    return choice(modifierSet) + next(depth + 1) + next(depth + 1);
  })(0);
  return output;
}
