// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(i);
}

for(let i=1; i<11; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j=1; j<11; j++) {
        // console.log(`Inner loop value: ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);
for(let i=0; i< myArr.length; i++) {
    const ele = myArr[i];
    // console.log(ele);
}

// break and continue

for(let i=1; i<= 20; i++) {
    // console.log(i);
    if(i==5) break
}

for(let i=1; i<= 20; i++) {
    if(i%5 == 0) continue
    // console.log(i);
}
