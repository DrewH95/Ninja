class Ninja {
    constructor (name, health) {
        this.name = name;
        this.health = 5;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name + "'s Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " gained +10HP")
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();