function Ninja(name){
    var speed = 3;
    var strength =3;
    this.name=name;
    this.health=100;

    this.sayName= function(){
        console.log("My ninja name is"+this.name+"!")
        return "My ninja name is"+this.name+"!";
        
    }

    this.showStats=function(){
        console.log("Name:"+this.name+" Health:"+this.health+" Speed:"+this.readspeed()+" Strength:"+this.readstrength())
        return "Name:"+this.name+"Health:"+this.health+"Speed:"+this.readspeed()+"Strength:"+this.readstrength();
    }

    this.readspeed=function(){
        return speed;
    }

    this.readstrength=function(){
        return strength;
    }

    this.drinkSake=function(){
        this.health+=10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();