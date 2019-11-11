var JSON = [{"name":"cat"}, {"name":"dog"}];

var hasMatch =false;

for (var index = 0; index < JSON.length; ++index) {

 var animal = JSON[index];
 
 if(animal.name == "dog"){
   console.log("break")
 }
}