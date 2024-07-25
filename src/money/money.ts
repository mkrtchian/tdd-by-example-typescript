/*
$5 + 10CHF = $10 si le taux est de 2:1
$5 + $5 = $10
*/

export class Money {
  constructor(
    protected _amount: number,
    protected _currency: string,
  ) {}

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(addend: Money): Money {
    return new Money(this._amount + addend._amount, this._currency);
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
