export abstract class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }

  abstract times(multiplier: number): Money;

  abstract currency(): string;

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
}

export class Dollar extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = "USD";
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }

  currency() {
    return this._currency;
  }
}

export class Franc extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = "CHF";
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }

  currency() {
    return this._currency;
  }
}
