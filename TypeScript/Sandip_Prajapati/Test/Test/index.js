const restaurants = [{
        restaurantId: 'HighH123',
        Name: 'HighWay Hotel',
        Total_Table: 5,
        Booked: 0,
        Not_Booked: 5,
        member_per_table: 4,
        Country: 'India'
    }];
const booked = [];
function ShowRestaurnant() {
    console.log(restaurants);
}
class Reservation {
    constructor(name, number_of_people, date, time, restaurant_Id) {
        this.name = name;
        this.number_of_people = number_of_people;
        this.date = date;
        this.time = time;
        this.restaurant_Id = restaurant_Id;
    }
    booked_Table() {
        const restaurant = restaurants.find(res => {
            if (res.restaurantId == this.restaurant_Id) {
                return res;
            }
        });
        const currentDate = new Date();
        const bookDate = new Date(this.date + ' ' + this.time);
        const datetime = bookDate.getHours() - currentDate.getHours();
        const daysCheck = bookDate.getTime() - currentDate.getTime();
        const datemonth = daysCheck / (1000 * 60 * 60 * 24 * 30);
        console.log(datemonth);
        if (restaurant) {
            if ((restaurant === null || restaurant === void 0 ? void 0 : restaurant.Not_Booked) == 0) {
                console.log('All table is Booked');
            }
            else if (this.number_of_people > (restaurant === null || restaurant === void 0 ? void 0 : restaurant.member_per_table)) {
                console.log('you need to booke another table');
            }
            else if (datetime < 6 || datemonth >= 1) {
                console.log('This time Slot is Not Available');
            }
            else {
                const userInfo = {
                    name: this.name,
                    number_of_people: this.number_of_people,
                    date: this.date,
                    time: this.time,
                    restaurantId: this.restaurant_Id,
                    table_id: this.restaurant_Id + '-' + (restaurant.Booked + 1)
                };
                booked.push(userInfo);
                console.log(booked);
                restaurant.Booked = restaurant.Booked + 1;
                restaurant.Not_Booked = restaurant.Not_Booked - 1;
                ShowRestaurnant();
            }
        }
        else {
            console.log('Invalid Restaurnat ID');
        }
    }
}
console.log("Enter Date in YYYY-MM-DD format");
ShowRestaurnant();
const reserve = new Reservation('Sandip Prajapati', 4, '2021-12-22', '21:30', 'HighH123');
reserve.booked_Table();
