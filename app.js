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

/*/!*Lecture Factories *!/
//factory function : when use return with function.
function createCircle(radius){
  return{
          radius,//equivalent to radius:radius
          draw:function (){ //Function or Method use to define some logic
              console.log('draw');
          }
  };
}
const circle=createCircle(1)
circle.draw()*/

/*Lecture Constructors*/
//Constructor Function :when use 'this' operator with 'new' operator
function Circle(radius){
    // console.log('this',this);
    this.raduis= radius;
    this.draw=function (){ //Function or Method use to define some logic
        console.log('draw');
        };
}
const another =new Circle(1); //when type new -create impiety object, -set this to point to this object - return that object from this function

