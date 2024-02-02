class Employee{
    code:string;
    salary:Number;
    name:string;
    department:string;
    setemployee(code:string,salary:Number,name:string,department:string){
        this.code=code;
        this.salary=salary;
        this.name=name;
        this.department=department;


    }
    printdetails(){
        console.log(this.code,this.name,this.department,this.salary);
        
    }
}
let obj=new Employee()
obj.setemployee("steuhh",55555,"varun","hr")
obj.printdetails()