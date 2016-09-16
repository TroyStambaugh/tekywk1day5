var person={
    firstName:"Troy",
    lastName:"Stambaugh",
    email:"william.stambaugh@interapthq.com",
    phone:"555.555.5555",
    birthdate:"5.27.83",
    fullname:function(){
        return this.firstName+""+this.lastName;
    }
};

function printDetails(p){
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthdate);
}

printDetails(person);

console.log(person.fullname());



var firstName = "Auri";
var lastName = "Rahimzadeh";
var email = "auri@auri.net";
var phone = "317.490.4321";

var person = {
    firstName : "Auri",
    lastName : "Rahimzadeh",
    email : "auri@auri.net",
    phone : "317.490.4321",
    fullname : function() {
        return firstName + " " + lastName;
    }
};

function printDetails (p) {
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.fullname());
} 

printDetails(person);

console.log(person.fullname());

//if email or property is missing in this case email

var person={
    firstName:"Troy",
    lastName:"Stambaugh",
    
    phone:"555.555.5555",
    birthdate:"5.27.83",
    fullname:function(){
        return this.firstName+""+this.lastName;
    }
};

function printDetails(p){
    if(typeof p.email !="undefined"){
        console.log(p.email);
    }
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthdate);
}

printDetails(person);

console.log(person.fullname());

