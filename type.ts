// diffrent type in typescript
let count = 5;
// count = 'a'// we can't do like this 

// type annotation
let a : number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3,4,5];
let f: any[] = [1,2,true,'a',false]

a = 5;
// a = 'S'

// in plain js we do like this we dont have enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2; 

// in typescript we have enum
enum Color{Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;
