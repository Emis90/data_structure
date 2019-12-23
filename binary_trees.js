//BINARY SEARCH TREE: saves time looking things up and inserting
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
   constructor(value) {
     this.root = new Node(value)
     this.count = 1
   }


   size() {
     return this.count
   }

   insert(value) {
      this.count += 1

      let newNode = new Node(value)

      const searchTree = (parent) => {//start looking from the parent node
        if (value < parent.value) { //go left
          if(!parent.left) {//base case
            parent.left = newNode
          } else {
            searchTree(parent.left)
          }
        } else if (value > parent.value) { //go right
            if(!parent.right) {//base case
              parent.right = newNode
            } else {
              searchTree(parent.right)
            }
          }
        }


       searchTree(this.root) //start looking from top
   }

   min() {
    //look for left most

    let current = this.root//start from top then this will be come the smallest by ressign it to the left in a loop

     while(current.left) {
       current = current.left
     }

    return current.value
   }

   max() {
   //look for right most
     let current = this.root

     while (current.right) {
       current = current.right
     }

     return current.value
   }

   contains(value) { //check if that value exists in the tree
      let current = this.root

      while(current) {
        if (current.value === value) {
          return true
        } else if (value < current.value) {
          current = current.left
        } else if (value > current.value) {
          current = current.right
        }
      }

    return false
   }

   //depth-first seatch >> look branch by branch

   //in-order
   //left, root, right >> we ll get an ordered list of numbers
   dfsInOrder() {
     let result = []

     const traverse = node => {
      if(node.left) traverse(node.left)

      result.push(node.value)

      if(node.right) traverse(node.right)
     }

     traverse(this.root)
     return result
   }

   //pre-order
   //root, left, right
   dfsPreOrder() {
      let result = []
      const traverse = node => {
        result.push(node.value)

        if(node.left) traverse(node.left)

        if(node.right) traverse(node.right)
       }

      traverse(this.root)
      return result
   }

   //post-order
   // left, right, root
   dfsPostOrder() {
      let result = []
      const traverse = node => {
        if(node.left) traverse(node.left)

        if(node.right) traverse(node.right)

        result.push(node.value)
       }

      traverse(this.root)
      return result
   }

   //breath first seach  >> look level by level

   bfs() {
     let result = []
     let queue = []

     queue.push(this.root)

     while (queue.length) {
       let currentNode = queue.shift()

       result.push(currentNode.value)

       if (currentNode.left) {queue.push(currentNode.left)}
       if(currentNode.right) {queue.push(currentNode.right  )}

     }

     return result
   }

}




