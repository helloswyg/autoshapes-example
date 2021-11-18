/* 
Define a grammar for lines and write an interpreter 

Compose a line from a binary tree. Each node in the tree acts as a modifier applied to the concatenation of it's children.

The unit operator is allowed as a modifier.
*/

import { PathArray } from '@svgdotjs/svg.js';
import { Children } from 'react';
import { library, utils } from '.';
import { pathCompose } from './utils';

export type Line = PathArray;
export type ModifierFunc = (l: Line) => Line;

export enum NodeTypes {
  MODIFIER,
  ATOM,
}

export interface ModifierNode {
  type: NodeTypes.MODIFIER;
  modifier: ModifierFunc;
  children: (Node)[];
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

export function createNullAtom(): AtomNode{
    return {
        type: NodeTypes.ATOM,
        atom: new PathArray
    }
}

export function evaluateTree(node: Node): Line {
  if (isAtom(node)) return node.atom;
  return pathCompose(node.children.map(evaluateTree));
}

export const modifierVocabulary: Record<string, ModifierFunc> = {
  S: utils.small,
  B: utils.big,
  F: utils.flipY,
  I: (l) => l,
};

export const atomVocabulary: Record<string, Line> = {
  a: library.loop,
  b: library.crest,
  c: library.connector,
};

/* 
for a tutoral on decoding trees see: https://en.wikipedia.org/wiki/Binary_tree#Succinct_encodings
*/
export function decodeString(input: string): Node {
  let position = 0;
  const tree = (function next(): Node | null {
    const word = input[position++];
    if (word && word in modifierVocabulary) {
        
        
      const left = next() || createNullAtom()
      const right = next() || createNullAtom()
      const node: ModifierNode = {
        type: NodeTypes.MODIFIER,
        modifier: modifierVocabulary[word],
        children: [left , right],
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
    
    return null
  })();

  if (tree === null) throw "bad tree"
  
  return tree
}

export function countNodes(node: Node): number {
    if (isAtom(node)) return 1;
    return node.children.map(countNodes).reduce((a,b)=>a+b) +1;
}