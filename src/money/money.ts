export abstract class Money {
  constructor(
    protected amount: number,
    private _currency: string,
  ) {}

  abstract times(multiplier: number): Money;

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }

  equals(object: Money) {
    return (
      this.amount === object.amount && this.constructor === object.constructor
    );
  }

  currency() {
    return this._currency;
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
