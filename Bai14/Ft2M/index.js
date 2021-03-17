function footToMeter(foot){
    let meter = 0.305 * foot;
    return meter
}
function meterToFoot(meter){
    let foot = 3.279 * meter;
    return foot
}

console.log("Feet to Meters");
for(let i = 1; i <11;i++){
    let a = footToMeter(i);
    console.log(`${i}   ${footToMeter(i)}`);
}
console.log(`${meterToFoot(25)}`)
console.log("Meters to Foot");
for(let j =1;j<11;j++){
    console.log(`${j}    ${meterToFoot(j)}`);
}