var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
while (i < 1) {
  console.log(ingredients);
  i++
}

console.log("Let's make banana bread:")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("Let's make banana bread backwards:")
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}
