

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
        data = [],
        queue = [];
        queue.push(node); 

        while(queue.length){ 
           node = queue.shift(); //grab the last item from the queue
           data.push(node.value); //put it in our data array (and we've now traversed it)
           if(node.left) queue.push(node.left); //grab that node's .left and throw it in the queue
           if(node.right) queue.push(node.right); //grab that node's .right and throw it in the queue
        }
        return data;
    }



    DFSPreOrder(){
        var data = []; 
        function traverse(node){ //this is a recursive function that adds the visited node to data, as we encounter it, traversing down the tree.
            data.push(node.value); 
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }



    DFSPostOrder(){// called postOrder b/c we only visit a node after visiting the left and right
        var data = [];
        function traverse(node){ //here we only add the node (on our way "back up")
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }



    DFSInOrder(){ //left, node, right - this will return all the nodes lowest to greatest
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

  5
 / \
3   7





var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();





function dpsPreorder(root){
    let data = []
    function traverse (node){
        data.push(node.val)
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(root)
    return data
}