interface framework{
    name:string
    architecture:string
    roadmap()
}
class Django implements framework{
    name:string
    architecture: string
    constructor(name,architecture){
        this.name=name;
        this.architecture=architecture

    }
    roadmap() {
        console.log(this.name,"is a ",this.architecture,"framework");
        
        
    }
}
class Anguar implements framework{
    name:string
    architecture: string
    constructor(name,architecture){
        this.name=name;
        this.architecture=architecture

    }
    roadmap() {
        console.log(this.name,"is a ",this.architecture,"framework");
        
        
    }
}


class Student {
    frameworkobj:framework
    constructor(framework){
        this.frameworkobj=framework
        

    }
    learn(){
        this.frameworkobj.roadmap()
    }

}

var djangoobj=new Django("django","mvt")

var studentobj=new Student(djangoobj)
studentobj.learn()

// angular language serice

