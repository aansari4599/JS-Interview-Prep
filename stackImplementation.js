class Stack {
  constructor() {
    // Initialize your stack
    this.stack = [];
  }

  push(element) {
    // Add element to the top
    this.stack.push(element);
    return this.stack.length;
  }

  pop() {
    // Remove and return top element
    return this.stack.pop();
  }

  peek() {
    // Return top element without removing
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    // Check if stack is empty
    return this.stack.length == 0 ? true : false;
  }

  size() {
    // Return number of elements
    return this.stack.length;
  }

  clear() {
    // Remove all elements
    this.stack = [];
  }
}

module.exports = Stack;
