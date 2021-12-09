const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);


const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];


const sciId = birds.map(item => item.ID).join(' - ');
console.log(sciId);

// let text = ' ';

// sciId.forEach(item => text += item + '<br>')

// document.getElementById('mapDemo').innerHTML = mySet;


let text = 'India';
const mySet = [...new Set(text)];

console.log(mySet);
