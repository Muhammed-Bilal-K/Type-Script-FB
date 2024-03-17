class Human{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;    
    }

    getInfo(){
        console.log(this.name);
    }
}

class Man extends Human{
    constructor(name,gender){
        super(name)
        this.gender = gender;
    }
    
    showInfo(){
        console.log(this.gender);
    }
}


const john = new Man('bilal','male')
john.showInfo();