class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }
}

export class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Dollar) {
    return this.amount === object.amount;
  }
}

export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Franc) {
    return this.amount === object.amount;
  }
}
