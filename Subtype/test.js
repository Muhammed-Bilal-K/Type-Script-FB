// enum Directions {
//   up = 10,
//   down = "ee",
//   left = 23,
//   right = "dsds",
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

import { } from './namespace'

Myspace.funData();
var Car = /** @class */ (function () {
    function Car(intiBrand, modelData, yearData) {
        this.brand = intiBrand;
        this.model = modelData;
        this.year = yearData;
    }
    Car.prototype.getInfoEcar = function () {
        console.log(this.brand);
    };
    return Car;
}());
var ECar = /** @class */ (function (_super) {
    __extends(ECar, _super);
    function ECar(batteryData, intiBrand, modelData, yearData) {
        var _this = _super.call(this, intiBrand, modelData, yearData) || this;
        _this.getBattery = function () {
            return _this.battery;
        };
        _this.setBattery = function (battery) {
            _this.battery = battery;
        };
        _this.battery = batteryData;
        return _this;
    }
    ECar.prototype.getInfoEcar = function () {
        _super.prototype.getInfoEcar.call(this);
        console.log(this.battery);
    };
    ECar.a = 10;
    return ECar;
}(Car));
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
var e = new ECar('lithium', 'benz', 'x-series', 2015);
e.getInfoEcar();
e.setBattery('iron');
e.getInfoEcar();
var employee = {
    name: 'John Doe',
    age: 30,
    jobTitle: 'Software Engineer'
};
var brandData = /** @class */ (function () {
    function brandData(name) {
        this.name = name;
    }
    brandData.prototype.getName = function () {
        return this.name;
    };
    brandData.prototype.setName = function (str) {
        this.name = str;
    };
    return brandData;
}());
var br = /** @class */ (function (_super) {
    __extends(br, _super);
    function br(name) {
        return _super.call(this, name) || this;
    }
    br.prototype.getInfo = function () {
        return this.getName();
    };
    return br;
}(brandData));
var b = new br('smalldata');
console.log(b.getInfo());
function nameData(str1) {
    return str1;
}
nameData({ name: 'ds' });
var datasss = {
    age: 2
};
