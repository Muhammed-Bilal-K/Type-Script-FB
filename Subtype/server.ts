interface App{
    name:string;
    age:number;
    access : () => string;
}

const app : App = {
    name : "someName",
    age : 20,
    access(){
        return this.name;
    }
}

console.log(app.access());


type Mobile = {
    brand : string | number;
    price : number;
    getName : () => string
}

const mobile : Mobile = {
    brand : "apple",
    price : 20,
    getName (){
        return this.brand;
    },
}

console.log(mobile.getName());
