/*
$5 + 10CHF = $10 si le taux est de 2:1
--> $5 + $5 = $10
Retourner Money à partir de $5 + $5
*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Expression {}

export class Money implements Expression {
  constructor(
    protected _amount: number,
    protected _currency: string,
  ) {}

  get amount() {
    return this._amount;
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(addend: Money) {
    return new Sum(this, addend);
  }

  equals(other: Money): boolean {
    return (
      this._amount === other._amount && this.currency() === other.currency()
    );
  }

  currency() {
    return this._currency;
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }
}

export class Bank {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reduce(source: Expression, currency: string) {
    const sum = source as Sum;
    return new Money(sum.addend.amount + sum.augend.amount, "USD");
  }
}

export class Sum implements Expression {
  constructor(
    public augend: Money,
    public addend: Money,
  ) {}
}
