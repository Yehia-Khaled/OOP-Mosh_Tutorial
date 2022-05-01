/*/!* 1-Encapsulation*!/

//the default method property and function didn't related to other
let baseSalary= 30_000;
let overtime =10;
let rate=20;

getWage=(baseSalary,overtime,rate)=>{
    return baseSalary +(overtime*rate);
}
// Method Encapsulation
let employee={
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage:function (){
        return this.baseSalary +(this.overtime * this.rate);
    }
};
employee.getWage();
*/



