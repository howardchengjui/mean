// // function makePasta(pasta, makeSauce) {
// //     console.log("Boiling water");
// //     console.log("Putting " + pasta + " pasta in the water");
// //     console.log("Pasta is done!");
// //     return pasta + " Pasta! Voila!";
// //   }
// //   makePasta("Penne");
// //   makePasta("Farfalle");

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     // create a variable for sauce!
//     var sauce = makeSauce();          // invoke makeSauce, our callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
//   }


//   function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
//   }


//   function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "alfredo";
//   }


//   // we pass the whole makePesto recipe to makePasta!
//   console.log(makePasta("Penne", makePesto));
//   // notice lack of parentheses after makePesto.
//   // Remember: we want to pass the function, not execute it and pass a return value.
// //   console.log(makePasta("Farfalle", makeAlfredo));

var secondFavorite;
// let's use setTimeout to simulate an API call that takes 0 seconds to complete
setTimeout(function(){ secondFavorite = "charmander"; }, 0);
console.log("Got my second favorite", secondFavorite);

let x = 1;
let y = 2;
const z = 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);