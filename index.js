// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(array){
  drivers.push('Ralph');
}
function destructivelyPrependDriver(array){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(array){
  drivers.pop(2);
}
function destructivelyRemoveFirstDriver(array){
  drivers.shift();
}
function appendDriver(array){
  array = [...array, "Broom"];
  return array
}
