interface Expression {
  reduce(bank: Bank, to: string): Expression;
}

export class Money implements Expression {
  constructor(
    public amount: number,
    protected _currency: string,
  ) {}

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Money): Sum {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string) {
    const rate = bank.rate(this._currency, to);
    return new Money(this.amount / rate, to);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  equals(object: Money) {
    return this.amount === object.amount;
  }

  currency() {
    return this._currency;
  }
}

export class Sum implements Expression {
  constructor(
    public augend: Money,
    public addend: Money,
  ) {}

  reduce(bank: Bank, to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

class Pair {
  constructor(
    public from: string,
    public to: string,
  ) {}

  equals(object: Pair) {
    return this.from === object.from && this.to === object.to;
  }

  hashCode() {
    return 0;
  }
}

export class Bank {
  private _rates: Map<number, number>;

  constructor() {
    this._rates = new Map();
  }

  reduce(source: Expression, to: string) {
    return (source as Sum).reduce(this, to);
  }

  rate(from: string, to: string) {
    if (from === to) return 1;

    return this._rates.get(new Pair(from, to).hashCode());
  }

  addRate(from: string, to: string, rate: number) {
    this._rates.set(new Pair(from, to).hashCode(), rate);
  }
}
