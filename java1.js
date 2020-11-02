
var user= {
    name: "giorgi",
    age: 25,
    gender: "male"
  };
  
 if (user.age<18) {console.log("arasrulwlovani")} 
else if (user.age >= 18 && user.gender == 'male'){
    console.log("სრულწლოვანი ბიჭი")
}

let cars = ["audi", "bmw", "lexus", "volkswagen", "ferrary", "porsche"];

for(i=0; i<5; i++){ 
    console.log(cars[i]);
}

let name = ["giorgi", "daviti", "ana", "vaxo", "jumberiko"]
for(i=0; i<name.length; i++){ if (name[i].length>5) {console.log(name[i])   
}}

let number = [ 5, 10, 25, 33, 28, 30, ]
for(i=0; i<number.length; i++){if(number[i]%2==0){console.log("luwia" ,number[i] )}}
for(i=0; i<number.length; i++){if(number[i]%2!=0){console.log("kentia" ,number[i] )}}

let user2 = ["name" , "age", 25, 50, "surname", [100, 500] ];
console.log(user2[5][1])


var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.eyecolor)

let masivi=[ 5,"saxeli" , 'ragaceebi' , 609, 'dasabechdi' ]
for(i=0; i<5; i++){ 
    console.log(masivi[i]);
}