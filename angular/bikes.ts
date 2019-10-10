class Bike{
    constructor(
        public price:number,
        public max_speed:number,
        public miles:number){
            this.price=price;
            this.max_speed=max_speed;
            this.miles=miles;
        }
        displayInfo(){
            console.log(this);
            return this;
        }
        ride(){
            console.log("Riding");
            return this.miles += 10;
        }
        reverse(){
            console.log("Reversing");
            this.miles -= 5;
        }
}

const bikey = new Bike(100,20,50);
bikey.ride();
bikey.ride();
bikey.ride();
bikey.reverse();
bikey.displayInfo();
