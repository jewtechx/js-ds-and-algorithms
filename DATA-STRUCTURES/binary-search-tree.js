class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        //root of binary search tree
        this.root = null;
    }

    // function to be implemented
    insert(data){
        var newNode = new Node(data)

        if(this.root ==  null){
            this.root = newNode
        } else this.insertNode(this.root,newNode)
    }

    insertNode(node,newNode){
            if(newNode.data < node.data){
                if(node.left == null){
                    node.left = newNode
                }else
                this.insertNode(node.left,newNode)
            }else{
                if(node.right == null){
                    node.right = newNode
                }else
                this.insertNode(node.right,newNode)
            }
        }
    
    remove(data){
        this.root = this.removeData(this.root,data)
    }

    removeData(node,key){
        if(node == null){
            return null
        }else if(key < node.data){
            node.left = this.removeData(node.left,key)
            return node
        }else if(key > node.data){
            node.right = this.removeData(node.right,key)
            return node
        }else{
            if(node.left == null && node.right == null){
                node = null
                return node
            }

            if(node.left == null){
                node = node.right
                return node
            }
            if(node.right == null){
                node = node.right
                return node
            }

            var aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeData(node.right,aux.data)
            return node
        }
    }
    
    // helper functions
    findMinNode(node){
        if(node.left == null){return node}else return this.findMinNode(node.left)
    }

    findMaxNode(node){
        if(node.right == null) {return node} else return this.findMaxNode(node.right)
    }

    // getRootNode()
    inorder(node){
        if(node !== null){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }
    
    preorder(node){
        if(node !== null){
            console.log(node.data)
            this.inorder(node.left)
            this.inorder(node.right)
        }
    }
    postorder(node){
        if(node !== null){
            this.inorder(node.left)
            this.inorder(node.right)
            console.log(node.data)
        }
    }
    search(node,data){
        if(node == null){
            return null
        }else if(data < node.data){
            return this.search(node.left,data)
        }else if(data > node.data){
            return this.search(node.right,data)
        }else{
            return node
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(40)
bst.insert(25)
bst.insert(2)
bst.insert(1)
bst.insert(60)
bst.insert(6)
bst.insert(18)

bst.remove(4)

bst.inorder(bst.root)
console.log("******")
bst.preorder(bst.root)
console.log("******")
bst.postorder(bst.root)
console.log("******")

console.log(bst.root)
console.log(bst.search(bst.root,18))
console.log(bst.findMinNode(bst.root))
console.log(bst.findMaxNode(bst.root))