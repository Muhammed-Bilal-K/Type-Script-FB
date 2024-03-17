/////////////////infer types(implicit types)///////////////
// it is main used for auto detect the type in the variable
var objName = {
    name: "db",
    age: 20,
    getName: function () {
        console.log(this.name);
    },
};
function gName(objName) {
    // nothing return that way it give void
    console.log(objName.name);
}
function getName(objName) {
    // return string
    return objName.name;
}
function getNam(objName) {
    //return obj toatally
    return objName;
}
var newValue = getName(objName);
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
var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["COMPLETED"] = 1] = "COMPLETED";
    Status[Status["FAIED"] = 2] = "FAIED";
})(Status || (Status = {}));
function fetSatus(orderId, Sta) {
    console.log(orderId, '==', Sta);
}
fetSatus('12345', Status.COMPLETED);
