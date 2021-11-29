// Online table reservation in the restaurant for specific date and time. This will
// Provide the list of restaurants in the country so that the user can choose accordingly.
// Provide the list of tables available for online reservation at different dining rooms in the restaurant.
// Mention the number of guests that can be accommodated on the particular table.
// Accept the booking for tables.
// Online table reservations are done 6hrs in advance for the current date.
// Table reservation can be done up to one month in advance.
// Give a token number to the customer as an acknowledgement of booking.
interface Restaurant  {
    restaurantId: string;
    Name: string;
    Total_Table: number;
    Booked: number;
    Not_Booked: number;
    member_per_table: number;
    Country: string;
}
interface Booking {
    name: string;
    number_of_people: number;
    date: string;
    time: string;
    restaurantId: string;
    table_id: string;
}
const restaurants: Restaurant[] = [{
    restaurantId: 'HighH123',
    Name: 'HighWay Hotel',
    Total_Table: 5,
    Booked: 0,
    Not_Booked: 5,
    member_per_table: 4,
    Country: 'India'
}]
const booked: Booking[] = []
function ShowRestaurnant() {
    console.log(restaurants)
}
class Reservation {
    constructor(public name: string, public number_of_people: number, public date: string, public time: string, public restaurant_Id: string) {

    }
    booked_Table() {
        const restaurant = restaurants.find(res => {
            if (res.restaurantId == this.restaurant_Id) {
                return res
            }
        })
        const currentDate = new Date()
        const bookDate = new Date(this.date + ' ' + this.time);
        const datetime = bookDate.getHours() - currentDate.getHours();
        const daysCheck = bookDate.getTime() - currentDate.getTime();
        const datemonth = daysCheck / (1000 * 60 * 60 * 24 * 30)
        console.log(datemonth)
        if (restaurant) {
            if (restaurant?.Not_Booked == 0) {
                console.log('All table is Booked')
            }
            else if (this.number_of_people > restaurant?.member_per_table) {
                console.log('you need to booke another table')
            }
            else if (datetime < 6 || datemonth >= 1) {
                console.log('This time Slot is Not Available')
            }
            else {
                const userInfo:Booking = {
                    name: this.name,
                    number_of_people: this.number_of_people,
                    date: this.date,
                    time: this.time,
                    restaurantId: this.restaurant_Id,
                    table_id: this.restaurant_Id + '-' + (restaurant.Booked + 1)
                }
                booked.push(userInfo)
                console.log(booked)
                restaurant.Booked = restaurant.Booked+1;
                restaurant.Not_Booked = restaurant.Not_Booked-1;
                ShowRestaurnant()
            }
        }
        else {
            console.log('Invalid Restaurnat ID')
        }
    }

}
console.log("Enter Date in YYYY-MM-DD format")
ShowRestaurnant()
const reserve = new Reservation('Sandip Prajapati', 4, '2021-12-22', '21:30', 'HighH123')
reserve.booked_Table()
