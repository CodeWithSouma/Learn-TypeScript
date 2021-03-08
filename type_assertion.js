//type assertions
var message;
message = "abc";
// it not the change the type of the variable in runtime it is the way to tell the 
//typescript compiler what type of variable it is
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
console.log(endsWithC);
