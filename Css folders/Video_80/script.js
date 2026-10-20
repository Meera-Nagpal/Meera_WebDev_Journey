let obj={
    a:7,
    b:"Harry"
}
console.log(obj)
let animal={
    eats:true
} ;
let rabbit={
    jumps:true
};
rabbit.__proto_=animal;
class Animal{ 
    constructor(name){
        console.log("Object is created")
    }
    eats(){
        console.log("Kha rha hun mai zindagi")
    }
}
class Lion extends Animal{
    constructor(name){
        super()
        this.name=name
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("Kha rha hun mai zindagi Lion")
    }
}
let a =new Animal("Bunny");
console.log(a)
a.eats();

let b=new Lion("Shera");
console.log(b)
b.eats();
class User{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length<4){
            console.log("Name is too short.");
            return;
        }
        this._name=value;    
    }
}
let user=new User("John");
console.log(user.name);
user.name="Harry"
console.log(user)