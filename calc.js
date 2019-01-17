// https://qiita.com/ara_tack/items/3386c59b59789f76b1e8#%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E8%AA%B2%E9%87%91
// ram is GB unit
const ResourceClasses = {
    "small": { cpu: 1, ram: 2, credit: 5 },
    "medium": { cpu: 2, ram: 4, credit: 10 }, // default
    "medium+": { cpu: 3, ram: 6, credit: 15 },
    "large": { cpu: 4, ram: 8, credit: 20 },
    "xlarge": { cpu: 8, ram: 16, credit: 40 },
    "macos-large": { cpu: 4, ram: 8, credit: 50 },
};
const usDollerPerCredit = 0.0006; // $0.006 per 10 credits.
const usDollerPerUser = 15;

/**
 * @param {number} activeUser 
 * @param {{resClass:string, min:number}[]} minAndResClass
 */
function calc(activeUser, ...minAndResClasses) {
    const ret = {
        priceForUsers: 0,
        pricesForUsage: [],
    };

    if (activeUser < 5) {
        activeUser = 5; // minimam 5 users.
    }
    ret.priceForUsers = activeUser * usDollerPerUser;

    for (let data of minAndResClasses) {
        const credit = ResourceClasses[data.resClass].credit;
        const usageBasedPrice = data.min * credit * usDollerPerCredit;
        ret.pricesForUsage.push({ resClass: data.resClass, min: data.min, price: usageBasedPrice });
    }
    return ret;
}

function calcSum(activeUser, ...minAndResClasses) {
    const ret = calc(activeUser, ...minAndResClasses);
    let price = ret.priceForUsers;
    price += ret.pricesForUsage.reduce((prev, current) => {
        return prev += current.price;
    }, 0);
    return price;
}

module.exports = calcSum;
module.exports.calcSum = calcSum;
module.exports.calc = calc;
