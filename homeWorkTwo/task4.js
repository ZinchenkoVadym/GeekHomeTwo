//4. Task four
class Calculate {
    constructor(num) {
        this.number = num;
    }

    add(numNext)  {
        this.number = this.number + numNext;
        return this;
    }

    multiply(numNext){
        this.number = this.number * numNext;
        return this;
    }

    result() {
        return this.number;
    }
}
let calculate = new Calculate(3);
console.log(calculate.add(2).multiply(2).result());

