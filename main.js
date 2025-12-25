import Tree from "./binary-search-tree.js";

const arr = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const obj = new Tree(arr);

console.log(obj.insert(obj.root, 1023));
prettyPrint(obj.root);

obj.levelOrderForEach((node) => console.log(node.data));
