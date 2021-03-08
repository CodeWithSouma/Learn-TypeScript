//type assertions
let message;
message = "abc";
// it not the change the type of the variable in runtime it is the way to tell the 
//typescript compiler what type of variable it is
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
console.log(endsWithC);
