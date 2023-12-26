class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

        this.setMiles = function (miles) {
            this.miles = miles;
            return miles;
        };
    }
}

const car = new Car("TOYOTA","Camry","2023")
console.log(car.setMiles("20"))

Car.prototype.country = "ghana"
console.log(car.country)
