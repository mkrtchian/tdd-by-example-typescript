import { Bank } from "./bank";
import { Expression } from "./expression";
import { Money } from "./money";

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

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number) {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier),
    );
  }
}
