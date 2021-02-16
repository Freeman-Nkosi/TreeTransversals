let Tree = require("./tree")
let T= new Tree();

 function random(min=1,max=10){
     return Math.floor(Math.random()*(max-min+1)+min)
 }

 function randomTree(items=3){
     if(items<1){
        return T
     }
    else{
       
        T.add(random());
        return randomTree(items-1);

    }

 }
 //randomTree();
 T.add(10);
 T.add(8);
 T.add(12)
T.add(11)
T.add(14)
T.add(7);
T.add(9);
T.inorder()
T.preOrder();
T.postOrder();
 console.log("Inorder: ",T.arr);
 T.arr=[];
 T.invert();
 T.inorder();
 console.log("Inorder: ",T.arr);

 let arr=[];
 arr.unshift(1);
 arr.unshift(2);
 console.log(arr[0])
 let OBJ={'{':'}'}
 console.log(OBJ["{"]);
