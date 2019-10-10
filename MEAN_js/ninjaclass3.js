class Ninja{
    constructor(name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
        return this.name;
    }

    showStats(){
        console.log(this.name,this.strength,this.speed,this.health);
        return this;
    }

    drinkSake(){
        this.health +=10;
    }
}
const ninja=new Ninja ("Kenji");
ninja.drinkSake();
ninja.sayName();
ninja.showStats();

class Sensei extends Ninja{
    contructor(name){
        this.name=name;
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        const stats=super.showStats();
        console.log(stats);
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
console.log(superSensei.showStats());