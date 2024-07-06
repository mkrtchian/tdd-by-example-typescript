// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Expression {}

export class Money implements   Expression {
  constructor(
    protected amount: number,
    protected _currency: string,
  ) {}

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this._currency);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
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

export class Bank {
  reduce(source: Expression, to: string) {
    return null;
  }
}
