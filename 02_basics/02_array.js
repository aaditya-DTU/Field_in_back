const marvels = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvels.push(dc_heros)
// console.log(marvels);
// console.log(marvels[3][2]);

// const combineArr = marvels.concat(dc_heros)
// console.log(combineArr);

// spread operator
const allNewArr = [...marvels, ...dc_heros]
// console.log(allNewArr);

const anotherArr = [1,2,3, [4,5,6],7, [6,7,[4,5]]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Aaditya"}));   //intersting
//declare whether to make array from keys or values

let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3));
