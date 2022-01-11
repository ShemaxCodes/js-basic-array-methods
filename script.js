
const friends = ["Paris", "Meghan", "Toni"];
friends.push("Toa");
console.log(friends);

friends.unshift("John"); // Places John at the beginning of the array
console.log(friends);

// Remove elements
const popped = friends.pop(); // removes the last element and returns that element
console.log(popped);
console.log(friends);