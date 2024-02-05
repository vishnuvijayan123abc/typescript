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


