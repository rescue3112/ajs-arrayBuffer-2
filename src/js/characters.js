export default class MathCharacter {
  constructor(name, attack, stoned, distance) {
    this.name = name;
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  set stoned(stoned) {
    this.value = stoned;
  }

  get stoned() {
    return this.value;
  }

  set attack(attack) {
    this.attackValue = attack;
  }

  get attack() {
    let attackDope = (this.attackValue - (this.distance - 1) * 10);
    if (this.stoned) {
      attackDope -= Math.log2(this.distance) * 5;
    }
    if (attackDope > 100) {
      attackDope = 100;
    } else if (attackDope > 0) {
      attackDope = Math.round(attackDope);
    } else {
      attackDope = 0;
    }
    return attackDope;
  }
}