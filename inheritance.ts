class Parent{
    parentmwthod(){
        console.log("parent method");
        
    }
}
class Parent2 extends Parent{
    secondparent(){
        console.log("seond parent");
        
    }
}



class Child extends Parent2{
    childmethod(){
        console.log("child");
        
    }
}

var ch=new Child()
ch.childmethod()
ch.parentmwthod()
