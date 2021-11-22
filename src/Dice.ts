export default class Dice {
  private biased: boolean;
  private value: number;
  constructor(onlyEven = false) {
    this.biased = onlyEven;
    this.value = -1;
  }

  public roll() {
    let diceNumber;
    if (this.biased) {
      diceNumber = Math.floor(Math.random() * 3 + 1) * 2;
    } else diceNumber = Math.floor(Math.random() * 6) + 1;
    this.value = diceNumber;
    return diceNumber;
  }

  public showRollNumber() {
    return this.value;
  }
}
