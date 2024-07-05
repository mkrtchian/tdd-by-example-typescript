export class Money {
  constructor(
    protected amount: number,
    protected _currency: string,
  ) {}

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }

  equals(object: Money) {
    return (
      this.amount === object.amount && this.currency() === object.currency()
    );
  }

  currency() {
    return this._currency;
  }
}

export class Dollar extends Money {}

export class Franc extends Money {}
