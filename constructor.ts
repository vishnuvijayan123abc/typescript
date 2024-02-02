class student{
    roll:string;
    name:string;
    course:string;

    constructor(roll:string,name:string,course:string){
        this.roll=roll;
        this.name=name;
        this.course=course;

    }
    printdetails(){
        console.log(this.roll,this.name,this.course);
        
    }
}
let st=new student("wehf","arun","python")
st.printdetails()