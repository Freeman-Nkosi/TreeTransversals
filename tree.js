class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
        this.arr=[];
        this.preOrderArr=[];
        this.postOrderArr=[];
    
    }

    add(data) {
        let node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data <= node.data) {
                    if (node.left === null) { // if equal to null
                        node.left = new Node(data); //add the value
                        
                        return;
                    } else if (node.left !== null) { // if not equal to null
                        return searchTree(node.left) //Continue looking for the left most

                    }
                } else if (data > node.data) {
                    if (node.right === null) { //checking if null
                        node.right = new Node(data);
                        return;
                    } else if (node.right != null) { // if not null
                        return searchTree(node.right) //keep looking
                    }
                }




            }
        return searchTree(node)//searching for the next available option
        }
    
    
    }
    
    findMin(){
        let current=this.root;
        while(current.left!==null){
current=current.left;
        }
        return current

    }
    findMax(){
        let current=this.root;
        while(current.right!==null){
            current=current.right;
        }
        return current
    }
 
    inorder(node=this.root){
        
       if(node===null){
          
           return this.arr;
       }
   this.inorder(node.left);
//add data from left tree
//console.log(node.data);
this.arr.push(node.data)

this.inorder(node.right)



    }
    preOrder(node=this.root){
        if(node===null){
            return this.preOrderArr;
        }
        this.preOrderArr.push(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right)
    }
    postOrder(node=this.root){
        if(node===null){
            return this.postOrderArr
        }
        this.postOrder(node.right);
        this.postOrder(node.left);
        this.postOrderArr.push(node.data);
    }
    invert(node=this.root){
        if(node===null){
            return;
        }
        let temp=node.left;
        node.left=node.right;
        node.right=temp
        this.invert(node.left)
      
     
        this.invert(node.right);
        
    }
} //end of class

module.exports=Tree;