let CustomerArray = []
 class moBike {
    constructor(BikeNumber, PhoneNmber, Name, Days) {
        this.BikeNo = BikeNumber,
            this.PhoneNo = PhoneNmber,
            this.Name = Name,
            this.Days = Days

    }
    compute() {
        let Rent
        if (this.Days <= 5) {
            Rent = Days * 500
        }
        else if (this.Days > 5 && this.Days <= 10) {
            Rent = 5 * 500 + (this.Days-5) * 400
        }
        else {
            Rent = 5 * 500 + 5 * 400 + (this.Days-10) * 200
        }
        let CustomerJson ={
            "Name": this.Name,
            "BikeNo": this.BikeNo,
            "PhoneNo": this.PhoneNo,
            "Days": this.Days,
            "Rent": Rent
        };
        CustomerArray.push(CustomerJson)
        console.log("Customer Info: \n",CustomerJson)

    }
}
module.exports.MobileBike = moBike;
module.exports.CustArray = CustomerArray;
