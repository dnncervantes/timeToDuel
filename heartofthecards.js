class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

// UNITES
class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        console.log(`${this.name} was summoned!`);
    }
    attack(target) {
        target.resilience -= this.power;
        console.log(`${this.name} targeted ${target.name} and attacks for ${this.power}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Power: ${this.power}, Resilience ${this.resilience}`);
    }
}

// EFFECTS
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    castEffect(target) {
        if(target instanceof Unit) {
            if(this.stat == 'power') {
                target.power += this.magnitude
                console.log(`${this.name} was cast on ${target.name}`);
            } else {
                if(this.stat == 'resilience') {
                    target.resilience += this.magnitude
                }
            }
        }
    }
}

//UNIT CARD
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//EFFECT CARD
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 'resilience', 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", 'resilience', -2)
const pairProgramming = new Effect("Pair Programming", 2, "increase target's power by 2", 'power', 2)

hardAlgorithm.castEffect(redBeltNinja);
redBeltNinja.showStats();
unhandledPromiseRejection.castEffect(redBeltNinja)
pairProgramming.castEffect(redBeltNinja);
redBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();
