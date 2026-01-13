let name = "Omer"; //It can be changed
const age = 30; //It cannot be changed
var city = "New York";  //It can be changed but is old fashion
//-------------------------------------------------------------//
let name1 = "Ali";       // string
let age1 = 30;          // number
let isActive = true;     // boolean
let nullValue = null;       // null
let undefinedValue;         // undefined
//-------------------------------------------------------------//
let a = 10;
let b = 3;

a + b   // 13
a - b   // 7
a * b   // 30
a / b   // 3.33
a % b   // 1 (kalan)
a ** b  // 1000 (üs)
//-------------------------------------------------------------//
let not = 75;
if (not >= 85) {
    console.log("Pekiyi");
} 
else if (not >= 70) {
    console.log("İyi");
}
else if (not >= 50) {
    console.log("Geçti");
}
else {
    console.log("Kaldı");
}
//-------------------------------------------------------------//
let yas = 20;
let ehliyet = true;

if (yas >= 18 && ehliyet === true) {
    console.log("Araba sürebilir");
}
else {
    console.log("Araba süremez");
}
//-------------------------------------------------------------//
for (let i = 1; i <= 5; i++) {
    console.log("Merhaba " + i);
}
//-------------------------------------------------------------//
let i = 1;
while (i <= 5) {
    console.log("Merhaba " + i);
    i++;
}
//-------------------------------------------------------------//
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // 3'ü atlar
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;   // döngüyü durdurur
    console.log(i);
}
//-------------------------------------------------------------//
