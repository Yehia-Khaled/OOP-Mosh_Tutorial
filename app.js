                            /*Benefits of OOP*/
/*/!* 1- Encapsulation: Reduce Complexity + Increase resuability*!/

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

/*2- Abstraction: Reduce Complexity + isolate impact of Changes*/
/*3- Inheritance: Eliminate redundant code*/
/*4- Polymorphism: Refactor ugly switch/case statements */

// console.log('Hello World!')

/*
/!*Lecture Object Literals*!/
const circle={
  radius:1,//properties used  to hold values
  location:{
      x:1,
      y:1
  },
  draw:function (){ //Function or Method use to define some logic
      console.log('draw');
  }
};
circle.draw();
*/

/*Lecture Factories */
function createCircle(radius){
  return{
          radius,//equivalent to radius:radius
          draw:function (){ //Function or Method use to define some logic
              console.log('draw');
          }
  };
}
const circle=createCircle(1)
circle.draw()
