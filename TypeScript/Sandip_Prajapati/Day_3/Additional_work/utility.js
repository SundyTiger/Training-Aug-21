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
