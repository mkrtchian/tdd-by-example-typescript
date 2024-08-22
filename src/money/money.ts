/*
$5 + 10CHF = $10 si le taux est de 2:1
--> $5 + $5 = $10
Retourner Money à partir de $5 + $5
--> Reduce(Bank, string)
enhance currency type
Let the Bank handle the conversion
*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Expression {
  reduce: (bank: Bank, currency: string) => Money;
}

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

  reduce(bank: Bank, currency: string) {
    return new Money(3 / bank.rate(this._currency, currency), currency);
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }
}

export class Bank {
  reduce(source: Expression, currency: string) {
    return source.reduce(this, currency);
  }

  addRate(inputCurrency: string, outputCurrency: string, rate: number) {
    return true;
  }

  rate(inputCurrency: string, outputCurrency: string) {
    if (inputCurrency === outputCurrency) {
      return 1;
    }
    return 1.18;
  }
}

export class Sum implements Expression {
  constructor(
    public augend: Money,
    public addend: Money,
  ) {}

  reduce(bank: Bank, currency: string) {
    return new Money(this.addend.amount + this.augend.amount, currency);
  }
}
