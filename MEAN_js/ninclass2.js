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

    this.punch=function(opponent){
        opponent.health -= 5
        console.log(opponent.name + " was punched by" + this.name +" and lost 5 health!")
        console.log(opponent.health);
        return opponent.health;
    }

    this.kick=function(opponent){
        opponent.health -= strength * 15 ;
        console.log(opponent.name + " was kicked by" + this.name +" and lost 15 health!")
        console.log(opponent.health);
        return opponent.health;
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

