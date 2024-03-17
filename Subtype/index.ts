/////////////////infer types(implicit types)///////////////
// it is main used for auto detect the type in the variable

// js in weekly/loosily
// let username = 'fdfdfd';
// username = 0;

///////////////////////Define Type(Explicit Types)/////////////

// let username : string; //=  'man in the middle'
// let sub : number;    // = 30_000
// let isSub : boolean  // = true
// let array : String[]   //  =['js' , 'css' ,'ts'];
// let count : number[]   // = [1,2,3,5,7]

// if define type give ''let emptyarray :[]'' the ts assign that it is a empty array
//  if need to string and number  that is ''union''

// let userData : {name : string ; age : number} // = {name : 'db' , age : 20};

///////////////////////////////interface/////////////////////////
// interface Details{
//     name:string;
//     age:number;
//     getName : () => void;
// }

// let userData : Details = {name : 'db' , age : 20 , getName() {
//     console.log(this.name);
// },};

////////////////////////////Type//////////////////

// type Details = {
//     name:string;
//     age:number;
//     getName : () => void;
// }

// let objName : Details = {name : 'db' , age : 20 , getName() {
//     console.log(this.name);
// },};

//////////////////////union and Optional///////////////////////

//  type Details = {
//     name:string;
//     age:number | string;
//     getName?: () => void;
// }

// let skills : (string|number|boolean)[] = ['js' , 20 , true]

//////////////////////optional ?///////////////////////

////////////////////////Functions///////////////////

type Details = {
  name: string;
  age: number | string;
  getName?: () => void; // oprtional can include or not
  gName?: () => void;
};

let objName: Details = {
  name: "db",
  age: 20,
  getName() {
    console.log(this.name);
  },
};

function gName(objName: Details): void {
  // nothing return that way it give void
  console.log(objName.name);
}

function getName(objName: Details): string {
  // return string
  return objName.name;
}

function getNam(objName: Details): Details {
  //return obj toatally
  return objName;
}

const newValue = getName(objName);

newValue.length;

// function getName({name , age}:{ name : string ; age : number}) {
//     return name;
// }

// getName({name:'ddd',age:20});

// type CutomUserName = {
//   name: string;
//   age: string | number;
// };

// function getN(objName: Details): CutomUserName {
//   return { name: objName.name, age: objName.age };
// }

//////////////////////////////Named Types///////////////////////

// type Status = "pending" | "completed" | "failed";
// type Toggle = "on" | "off";

// let cuurentStatus: Status = "completed";

//////////////////////Function Overload////////////////////////

// function sum(n1: number | string, n2: number | string): number | string {
//     if (typeof n1 === "string" || typeof n2 === "string") {
//         return n1 + "" + n2;
//     }
//   return n1 + n2;
// }

// sum(2, 2);
// sum("2", "2");

// function sum(n1: string, n2: string): string;
// function sum(n1: number, n2: number): number;
// function sum(n1: any, n2: any): any {
//   return n1 + n2;
// }

// sum(2, 2);
// sum("2", "2");

////////////////////////////GENERICS////////////////////////////

// function getAge<T>(age:T) : T {
//     return age;
// }

// getAge<string>('20');
// getAge<number>(20);

// type AdminD = {
//   firstName: string;
//   role: string;
// };

// type OneMan = {
//   name: string;
//   age: number;
// };

// const adminD : AdminD= {
//   firstName: "admin",
//   role: "admin",
// };

// const oneMan : OneMan = {
//   name: "debug media",
//   age: 20,
// };

// function getDetails<T>(details : T) : T {
//     return details
// }

// const oneValue = getDetails<OneMan>(oneMan);
// const adminValue = getDetails<AdminD>(adminD);

// oneValue.age
// adminD.firstName

///////////////////////repeat value//////////////

// type OneMan = {
//   name: string;
//   age: number;
// };

// type AdminD = OneMan & {    // in here it can add multiple type
//   role: string;            // like  = OneMan & AnotherTypeDetail & {  
// };                          //     }

// type AdminD = OneMan;    //type ignae assign cheyam.

// ///INterface///

// interface OneMan {
//     name: string;
//     age: number;
//   };
  
//   interface AdminD extends OneMan {   
//     role: string;             
//   };   

// const oneMan: OneMan = {
//   name: "debug media",
//   age: 20,
// };

// const adminD: AdminD = {
//   name: "adminaa",
//   role: "admin",
//   age:22,
// };


/////////////////////////ENUM//////////////////////////


//type Status = "pending" | "completed" | "failed";
// enum Status {
//     PENDING,          //0 ='pending'
//     COMPLETED,       //1 = 'completed'
//     FAIED,         //2 = 'failed'
// }


// function fetSatus(orderId:string , Sta : Status) {
//     console.log(orderId,'==', Sta);
// }

// fetSatus('12345' , Status.COMPLETED)

////////////////////as const////////////////////

// let username = 'ddd' as const;
// let username = 'ddd' as string;
// let username = 'ddd' as number;


//keyof typeof 



////////utility types//////////////