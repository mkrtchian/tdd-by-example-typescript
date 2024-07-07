import { Bank } from "./bank";
import { Expression } from "./expression";
import { Sum } from "./sum";

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
