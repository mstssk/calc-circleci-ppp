const calcSum = require('./calc');

const activeUser = parseInt(process.argv[2]);
const minAndResClasses = [];
for (let i = 3; process.argv.length > i; i++) {
    const arg = process.argv[i];
    const splited = arg.split(":");
    const resClass = splited[0];
    const min = parseInt(splited[1]);
    minAndResClasses.push({ resClass, min });
}

console.log(calcSum(activeUser, ...minAndResClasses));
