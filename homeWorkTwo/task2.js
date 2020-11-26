// 2. Task two

class Tamagochi {
    constructor() {
        this.name = 'Tom';
        this.health = 150;
        this.eat = 150;
        this.drink = 150;
        this.sleep = 150;
        this.walk = 150;
        this.dance = 150;

    }

    healthTom() {
        let myTimer = setInterval(() => {
            this.health = this.health - 1;
            console.log(this.health);
            if (this.health < 100) {
                console.log('Tom need a doctor')
            }
            if (this.health < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toHealth() {
        this.health = this.health + 50;
    }

    eatTom() {
        let myTimer = setInterval(() => {
            this.eat = this.eat - 1;
            console.log(this.eat);
            if (this.eat < 80) {
                console.log('Tom need eat')
            }
            if (this.eat < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toEat() {
        this.eat = this.eat + 50;
    }

    drinkTom() {
        let myTimer = setInterval(() => {
            this.drink = this.drink - 1;
            console.log(this.drink);
            if (this.drink < 50) {
                console.log('Tom need drink')
            }
            if (this.drink < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toDrink() {
        this.drink = this.drink + 50;
    }

    sleepTom() {
        let myTimer = setInterval(() => {
            this.sleep = this.sleep - 1;
            console.log(this.sleep);
            if (this.sleep < 50) {
                console.log('Tom need sleep')
            }
            if (this.sleep < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toSleep() {
        this.sleep = this.sleep + 50;
    }

    walkTom() {
        let myTimer = setInterval(() => {
            this.walk = this.walk - 1;
            console.log(this.walk);
            if (this.walk < 50) {
                console.log('Tom need walk')
            }
            if (this.walk < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toWalk() {
        this.walk = this.walk + 50;
    }

    danceTom() {
        let myTimer = setInterval(() => {
            this.dance= this.dance - 1;
            console.log(this.dance);
            if (this.dance < 50) {
                console.log('Tom need walk')
            }
            if (this.dance < 1) {
                console.log('Tom died');
                clearInterval(myTimer);
            }
        }, 1000);
    }

    toDance() {
        this.dance = this.dance + 50;
    }
}

let tamagochik = new Tamagochi();
tamagochik.healthTom();
tamagochik.eatTom();
tamagochik.drinkTom();
tamagochik.sleepTom();
tamagochik.walkTom();
tamagochik.danceTom();
tamagochik.toHealth();
tamagochik.toEat();
tamagochik.toDrink();
tamagochik.toSleep();
tamagochik.toWalk();
tamagochik.toDance();
