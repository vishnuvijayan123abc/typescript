interface bike{
    name:string
    drive()
}

class PassionPro implements bike{
    name:string
    constructor(name){
        this.name=name
    }
    drive(){
        console.log(this.name,"drive method");
        
    }
}
class Hunter implements bike{
    name:string
    constructor(name){
        this.name=name
    }
    drive(){
        console.log(this.name,"drive method");
        
    }
}

class Person{
    vechileobj:bike
    constructor(vechile){
        this.vechileobj=vechile
    }
    drive(){
        this.vechileobj.drive()
    }
}

var hunterobj=new Hunter("hunter")

var personobj=new Person(hunterobj)
personobj.drive()





