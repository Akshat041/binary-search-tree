class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr = []) {
    const sortedArr = arr.sort((a, b) => a - b);
    this.root = this.buildTree(sortedArr);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (!arr || start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insert(root, value) {
    if (root === null) return new Node(value);

    if (value < root.data) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }

    return root;
  }

  // Get inorder successor (smallest in right subtree)
  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) curr = curr.left;
    return curr;
  }

  // Delete a node with value x from BST
  deleteItem(root, x) {
    if (root === null) return root;

    if (root.data > x) root.left = this.deleteItem(root.left, x);
    else if (root.data < x) root.right = this.deleteItem(root.right, x);
    else {
      // Node with 0 or 1 child
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // Node with 2 children
      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteItem(root.right, succ.data);
    }
    return root;
  }

  levelOrderForEach(callback) {
    if (!callback) {
      throw new Error("Callback not provided.");
    }

    if (this.root) {
      var queue = [this.root];
    }

    for (const node of queue) {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      callback(node);
    }
  }

  preOrderForEach(node, callback) {
    if (!callback) {
      throw new Error("Callback not provided.");
    }

    if (node === null) return;

    callback(node);
    this.preOrderForEach(node.left, callback);
    this.preOrderForEach(node.right, callback);
  }

  inOrderForEach(node, callback) {
    if (!callback) {
      throw new Error("Callback not provided.");
    }

    if (node === null) return;

    this.inOrderForEach(node.left, callback);
    callback(node);
    this.inOrderForEach(node.right, callback);
  }

  postOrderForEach(node, callback) {
    if (!callback) {
      throw new Error("Callback not provided.");
    }

    if (node === null) return;

    this.postOrderForEach(node.left, callback);
    this.postOrderForEach(node.right, callback);
    callback(node);
  }

  // height function implementation
  findNode(node = this.root, value) {
    if (node == null) {
      console.log("no such value found.");
      return null;
    }

    if (node.data === value) {
      return node;
    } else if (value > node.data) {
      return this.findNode(node.right, value);
    } else if (value < node.data) {
      return this.findNode(node.left, value);
    }
  }

  height(node) {
    if (node === null) {
      return -1;
    }

    const lh = this.height(node.left);
    const rh = this.height(node.right);
    return Math.max(lh, rh) + 1;
  }
}

export default Tree;
