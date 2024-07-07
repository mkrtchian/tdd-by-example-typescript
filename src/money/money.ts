interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
}

export class Money implements Expression {
  constructor(
    public amount: number,
    protected _currency: string,
  ) {}

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Expression): Expression {
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
    public augend: Expression,
    public addend: Expression,
  ) {}

  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  plus(addend: Expression) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return null as any as Expression;
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

export class RateNotDefinedError extends Error {
  constructor(
    public from: string,
    public to: string,
  ) {
    super("Rate not defined");
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
    if (from === to) {
      return 1;
    }
    const rate = this._rates.get(new Pair(from, to).hashCode());
    if (!rate) {
      throw new RateNotDefinedError(from, to);
    }
    return rate;
  }

  addRate(from: string, to: string, rate: number) {
    this._rates.set(new Pair(from, to).hashCode(), rate);
  }
}
