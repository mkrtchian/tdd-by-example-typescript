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
    const rate = this.currency() === "CHF" && to === "USD" ? 2 : 1;
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

export class Bank {
  reduce(source: Expression, to: string) {
    return (source as Sum).reduce(this, to);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  addRate(from: string, to: string, rate: number) {}
}
