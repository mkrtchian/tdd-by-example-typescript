export abstract class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }

  abstract times(multiplier: number): Money;

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  equals(object: Money) {
    return (
      this.amount === object.amount && this.constructor === object.constructor
    );
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
