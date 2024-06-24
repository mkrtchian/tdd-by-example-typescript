export class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    this.amount = this.amount * 2;
  }
}
