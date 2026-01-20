//var : Function scoped (fonksiyon içi geçerli), hoisting var, eski tip değişken tanımlama.
//let : Block scoped (blok içi geçerli), hoisting yok, yeni tip değişken tanımlama.
//const : Block scoped (blok içi geçerli), hoisting yok, sabit değişken tanımlama.
// == : Değer karşılaştırması (type coercion var)
// === : Değer ve tip karşılaştırması (type coercion yok)
// undefined : Değeri atanmamış değişkenlerin değeri
// null : Bilinçli olarak boş değeri temsil eder
//-------------------------------------------------------------//

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
function sum(x, y) {
    return x + y;
}

let sonuc = sum(5, 3); // sonuc 8 olur
console.log(sonuc);
//-------------------------------------------------------------//
let city = ["Istanbul", "Ankara", "Izmir", "Amsterdam"];
for (let i = 0; i < city.length; i++) {
    console.log(city[i]);
}
//-------------------------------------------------------------//
let city1 = ["Istanbul", "Ankara", "Izmir", "Amsterdam"];
for (let i in city1) {
    console.log(`index: ${i}, value: ${city1[i]}`)
}
//-------------------------------------------------------------//
let city2 = ["Istanbul", "Ankara", "Izmir", "Amsterdam"];
city2.forEach(function(value, index) {
    console.log(`index: ${index}, value: ${value}`);
});
//-------------------------------------------------------------//
let user = [
    {name: "Omer", age: 30},
    {name: "Ali", age: 25},
    {name: "Ayse", age: 28}
]
for(let i=0; i < user.length; i++) {
    console.log(user[i].name);
}
//-------------------------------------------------------------//
function greet() {
    console.log("Hello, welcome!");
}
greet();
//-------------------------------------------------------------//
data = confirm("Are you sure?");    
if (data) {
    console.log("User pressed OK");
} else {
    console.log("User pressed Cancel");
}
//-------------------------------------------------------------//
const user = {
    name: "Omer",
    age: 30,
    city: "New York"
};

const {name, age, city} = user;

console.log(name); // Omer
console.log(age);  // 30
console.log(city); // New York
//-------------------------------------------------------------//
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor);  // Red
console.log(secondColor); // Green
//-------------------------------------------------------------//
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
//-------------------------------------------------------------//