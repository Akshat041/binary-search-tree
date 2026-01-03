import Tree from "./binary-search-tree.js";

const randomArr = [];

function createRandomArr(randomArr) {
  return randomArr.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < 15; i++) {
  randomArr[i] = Math.floor(Math.random() * 100);
}

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

const obj = new Tree(randomArr);

prettyPrint(obj.root);

console.log("Is it balanced: ", obj.isBalanced());

console.log("Level Order Traversal");
console.log(obj.levelOrderForEach());

console.log("Pre Order Traversal");
console.log(obj.preOrderForEach());

console.log("In Order Traversal");
console.log(obj.inOrderForEach());

console.log("Post Order Traversal");
console.log(obj.postOrderForEach());

obj.insert(obj.root, 102);
obj.insert(obj.root, 103);
obj.insert(obj.root, 104);
obj.insert(obj.root, 105);
prettyPrint(obj.root);
console.log("Is it balanced: ", obj.isBalanced());

obj.rebalance();
prettyPrint(obj.root);
console.log("Is it balanced: ", obj.isBalanced());

console.log("Level Order Traversal");
console.log(obj.levelOrderForEach());

console.log("Pre Order Traversal");
console.log(obj.preOrderForEach());

console.log("In Order Traversal");
console.log(obj.inOrderForEach());

console.log("Post Order Traversal");
console.log(obj.postOrderForEach());
