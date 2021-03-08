// diffrent type in typescript
var count = 5;
// count = 'a'// we can't do like this 
// type annotation
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, 2, true, 'a', false];
a = 5;
// a = 'S'
// in plain js we do like this we dont have enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// in typescript we have enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
