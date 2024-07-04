export abstract class Money {
  protected _currency: string;

  constructor(protected amount: number) {
    this.amount = amount;
    this._currency = "";
  }

  abstract times(multiplier: number): Money;

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
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
  constructor(amount: number, currency: string) {
    super(amount);
    this._currency = "USD";
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
    this._currency = "CHF";
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
