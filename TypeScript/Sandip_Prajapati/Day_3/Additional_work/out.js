var Utility;
(function (Utility) {
    let Fees;
    (function (Fees) {
        function calculateLateFees(dayslate) {
            return dayslate * .25;
        }
        Fees.calculateLateFees = calculateLateFees;
        function maxBookAllow(age) {
            if (age < 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.maxBookAllow = maxBookAllow;
        function privateFunc() {
            console.log('This is Private....');
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts" />
var util = Utility.Fees;
// let fee = Utility.Fees.calculateLateFees(10);
let fee = util.calculateLateFees(10);
console.log(`Fees: ${fee}`);
