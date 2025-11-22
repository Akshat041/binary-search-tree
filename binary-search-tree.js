class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr = []) {
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (!arr || start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insert(value) {
    let currNode = this.root;

    if (currNode === null) {
      this.root = new Node(value);
      return;
    }

    while (currNode !== null) {
      if (value < currNode.data) {
        if (currNode.left === null) {
          this.root = new Node(value);
          return;
        }
        currNode = currNode.left;
      } else {
        if (currNode.right === null) {
          this.root = new Node(value);
          return;
        }
        currNode = currNode.right;
      }
    }
  }
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

const obj = new Tree([1, 2, 3, 4, 5]);
prettyPrint(obj.root);
console.log(obj.root);
