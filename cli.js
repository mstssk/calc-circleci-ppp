const calcSum = require('./calc');

const activeUser = parseInt(process.argv[2]);
let minAndResClasses = [];
for (let i = 3; process.argv.length > i; i++) {
    const arg = process.argv[i];
    const splited = arg.split(":");
    const resClass = splited[0];
    const min = parseInt(splited[1]);
    minAndResClasses.push({ resClass, min });
}
let dlc = 0;
if (minAndResClasses.some(item => item.resClass === "dlc")) {
    dlc = minAndResClasses.find(item => item.resClass === "dlc").min;
}
minAndResClasses = minAndResClasses.filter(item => item.resClass !== "dlc");

console.log(calcSum(activeUser, dlc, ...minAndResClasses));
