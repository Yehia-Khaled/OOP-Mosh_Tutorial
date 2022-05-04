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

/*
/!*Lecture Factories *!/
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
circle.draw()
*/

/*
/!*Lecture Constructors*!/
//Constructor Function :when use 'this' operator with 'new' operator
function Circle(radius){
    // console.log('this',this);
    this.raduis= radius;
    this.draw=function (){ //Function or Method use to define some logic
        console.log('draw');
    };
}
const another =new Circle(1); //when type new -create impiety object, -set this to point to this object - return that object from this function
*/

/*
/!*Lecture Constructor property*!/
//23:28
let x={}; //let x = new object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); //1, 2, 3, ...*/

/*
/!*Lecture Functions are Objects*!/
function Circle(radius){
    this.raduis= radius;
    this.draw=function (){
        console.log('draw');
    };
}

/!*const Circle1=new Function('radius',`
    this.raduis= radius;
    this.draw=function (){
        console.log('draw');
    }`);

const circle= new Circle1(1);*!/

const another=new Circle(1);
Circle.call({},1) //exactly in line 98
Circle.apply({}, [1,2,3]) //same as line 99 but when we have multiple argument add them to array
*/

/*
/!*Lecture Value vs Reference Types*!/
//Value type
let x =10;
let y=x;

x=20;
//reference type
let X={value:10};
let Y=X;
X.value=20;
console.log(' x',x,'\n','y',y)
console.log(' X',X,'\n','Y',Y)
//Primitives :are copied by their Value
//objects: are copied by their reference

let obj={value:10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log('obj',obj);*/

/*
/!*Lecture Adding/Removing Properties*!/
function Circle(radius){
    this.raduis= radius;
    this.draw=function (){
        console.log('draw');
    };
}
const circle=new Circle(10);

circle.location={x:1};

const propertyName='center location'; //can't use . notation when use space between words or _ -
circle[propertyName]={x:2}

//Removing property
delete circle.location; //OR delete circle[location];
console.log(circle);*/

/*
/!*Lecture Enumerating Properties*!/
function Circle(radius){
    this.radius= radius;
    this.draw=function (){
        console.log('draw');
    };
}
const circle=new Circle(10);

for (let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key,circle[key]);
}

const keys=Object.keys(circle);
console.log(keys);

if ('radius' in circle)  //Check the existence of key or property
    console.log('Circle has a radius. ');
*/

/*
/!*Lecture Abstraction*!/
function Circle(radius){
    this.radius= radius;

    this.defaultLocation={x:0,y:0};

    this.computeOptimumLocation =function(){
        // ...
    }

    this.draw=function (){
        this.computeOptimumLocation();

        console.log('draw');
    };
}
const circle=new Circle(10);

// circle.defaultLocation=false;
circle.computeOptimumLocation();
circle.draw();*/

/*
/!*Lecture Private Properties and Methods*!/
function Circle(radius){

    // let color ='red';

    this.radius= radius;

    let defaultLocation={x:0,y:0}; //define as local variable can't access outside function /object

    let computeOptimumLocation =function(){
        // ...
    }

    this.draw=function (){
        computeOptimumLocation();
        //defaultLocation
        //this.radius

        console.log('draw');
    };
}
const circle=new Circle(10);

circle.draw();
*/

/*Lecture Getters/Setters*/
function Circle(radius){
    this.radius= radius;
    let defaultLocation={x:0,y:0};

    this.getDefaultLocation=function (){
        return defaultLocation; //access default location as key but can't edit it/ recall it as method
    };

    this.draw=function (){
        console.log('draw');
    };

    Object.defineProperty(this,'defaultLocation',{
        get: function (){
            return defaultLocation; //access using getter and setter  as line 224 :226
        },
        set:function (value){
            if (!value.x || !value.y)
                throw new Error('Invalid location');
            defaultLocation=value;
        }
    })
}
const circle=new Circle(10);
// circle.getDefaultLocation();
console.log(circle.defaultLocation)
// circle.defaultLocation=1; //throw an error invalid location
circle.draw();