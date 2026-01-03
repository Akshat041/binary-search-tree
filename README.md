# Binary Search Tree Implementation

A comprehensive JavaScript implementation of a balanced Binary Search Tree (BST) with support for insertion, deletion, traversals, and balancing operations.

> This project is part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees#project-solution) curriculum.

## Features

- **Tree Construction**: Creates a balanced BST from an array of values
- **Insert & Delete**: Add and remove nodes while maintaining BST properties
- **Tree Traversals**:
  - Level Order (Breadth-First)
  - Pre-Order (DFS: Root → Left → Right)
  - In-Order (DFS: Left → Root → Right)
  - Post-Order (DFS: Left → Right → Root)
- **Tree Analysis**:
  - `height()`: Get the height of a node
  - `depth()`: Get the depth of a node
  - `findNode()`: Search for a node by value
  - `isBalanced()`: Check if the tree is balanced
- **Rebalancing**: Automatically rebalance an unbalanced tree

## Usage

```javascript
import Tree from "./binary-search-tree.js";

// Create a tree from an array
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(arr);

// Traverse the tree
tree.levelOrderForEach((node) => console.log(node.data));
tree.inOrderForEach(tree.root, (node) => console.log(node.data));

// Find and analyze nodes
const node = tree.findNode(tree.root, 7);
console.log(tree.height(node));
console.log(tree.depth(tree.root, 7));

// Check and rebalance
console.log(tree.isBalanced());
tree.rebalance();
```

### Constructor

- `new Tree(arr)` - Creates a balanced BST from an array

### Methods

- `insert(root, value)` - Insert a value into the tree
- `deleteItem(root, value)` - Delete a node by value
- `findNode(node, value)` - Find a node by its value
- `height(node)` - Get the height of a node
- `depth(root, value)` - Get the depth of a node
- `isBalanced(node)` - Check if tree is balanced
- `rebalance()` - Rebalance the entire tree
- `levelOrderForEach(callback)` - Level-order traversal
- `preOrderForEach(node, callback)` - Pre-order traversal
- `inOrderForEach(node, callback)` - In-order traversal
- `postOrderForEach(node, callback)` - Post-order traversal
