// enum Directions {
//   up = 10,
//   down = "ee",
//   left = 23,
//   right = "dsds",
// }

// let move: Directions = Directions.up;

// console.log(move);

// // type status = 'failure' | 'success' | 'pending';

// // interface statusData {
// //     failure : "failure";
// //     success? : "sucess";
// //     pending?: 'pending';
// // }

// // let DeliverdStatus : status = "failure"
// // let DeliverdStatus : statusData = {
// //     failure : "failure",
// // }

// type man = string;

// let person: man = "dsd";

// type dataUser = {
//   name: string;
//   age: string | number;
// };

// const user: dataUser = {
//   name: "kkk",
//   age: "43",
// };

// const newData = <T, U>(id: T, name: U): [T, U] => {
//   return [id, name];
// };

// newData<string, Number>("4", 4);
// // newData<number>(4);

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T) {
//   console.log(arg.length);

//   // return arg;
// }
// // loggingIdentity({ value : 3 });
// loggingIdentity({ length: 10, value: 3 });

/// <reference path='namespace.ts' />

Myspace.funData();

class Car{
  private brand : string;
  protected model : string;
  protected year:number;

  constructor(intiBrand : string , modelData : string , yearData : number){
    this.brand = intiBrand;
    this.model = modelData;
    this.year = yearData;
  }

  getInfoEcar(){
    console.log(this.brand);
  }
}


class ECar extends Car{
  private battery : string;
  static a : number = 10;
  constructor(batteryData : string ,intiBrand : string , modelData : string , yearData : number){
    super(intiBrand , modelData, yearData)
    this.battery = batteryData;
  }

  getBattery = () : string => {
    return this.battery
  }

  setBattery = (battery : string) : void => {
    this.battery = battery
  }

  getInfoEcar(){
    super.getInfoEcar()
    console.log(this.battery);
     
  }
}


// abstract class animal extends Car{
//     abstract makeCar() : void
// }

// class baby extends animal{
//   makeCar(): void {
//     console.log(this.year);
//   }
// }

// const benz = new Car('benz','x-series',2015);
// console.log(benz.getInfoEcar());
console.log(ECar.a);
const e = new ECar('lithium','benz','x-series',2015);
e.getInfoEcar();
e.setBattery('iron');
e.getInfoEcar();

type Person = {
  name: string;
  age: number;
};

type Person2 = {
  n?: string;
  a?: number;
};

type Employee = Person & Person2 &{
  jobTitle: string;
};

const employee: Employee = {
  name: 'John Doe',
  age: 30,
  jobTitle: 'Software Engineer'

};



class brandData{
  private name : string;
  constructor(name :string){
    this.name = name;
  }

  getName() : string{
    return this.name;
  }

  setName(str : string):void{
    this.name = str;
  }
}


class br extends brandData{
  constructor(name:string){
    super(name)
  }

  getInfo() : string{
    return this.getName();
  }
}

const b = new br('smalldata');
console.log(b.getInfo());

interface leng{
  name:string
}

function nameData<T extends leng>(str1 :T) : T {
  return str1 
}

nameData({name : 'ds'});


interface obj {
  name : string;
  age : number;
}


type newType = Omit<obj,'name'>

const datasss : newType = {
  age:2
}