/*
$5 + 10CHF = $10 si le taux est de 2:1
Retourner Money à partir de $5 + $5
enhance currency type
Let the Bank handle the conversion
Add a class for conversion rates
*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Expression {
  reduce: (bank: Bank, currency: string) => Money;
}

export class Money implements Expression {
  constructor(
    private _amount: number,
    private _currency: string,
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
    return new Money(
      this._amount / bank.rate(this._currency, currency),
      currency,
    );
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }
}

export class Pair {
  constructor(
    public inputCurrency: string,
    public outputCurrency: string,
  ) {}

  equals(pair: Pair) {
    return (
      this.inputCurrency === pair.inputCurrency &&
      this.outputCurrency === pair.outputCurrency
    );
  }

  hash() {
    return this.inputCurrency + this.outputCurrency;
  }
}

type ConversionRates = Map<string, number>;

export class ConversionRateNotFoundError extends Error {
  constructor(inputCurrency: string, outputCurrency: string) {
    super(
      `Conversion Rate not found between ${inputCurrency} and ${outputCurrency}`,
    );
  }
}

export class Bank {
  conversionRates: ConversionRates;

  constructor() {
    this.conversionRates = new Map<string, number>();
  }

  reduce(source: Expression, currency: string) {
    return source.reduce(this, currency);
  }

  addRate(inputCurrency: string, outputCurrency: string, rate: number) {
    const pair = new Pair(inputCurrency, outputCurrency);
    this.conversionRates.set(pair.hash(), rate);
  }

  rate(inputCurrency: string, outputCurrency: string) {
    if (inputCurrency === outputCurrency) return 1;

    const conversionRate = this.conversionRates.get(
      new Pair(inputCurrency, outputCurrency).hash(),
    );
    if (conversionRate === undefined) {
      throw new ConversionRateNotFoundError(inputCurrency, outputCurrency);
    }
    return conversionRate;
  }
}

export class Sum implements Expression {
  constructor(
    public augend: Money,
    public addend: Money,
  ) {}

  reduce(bank: Bank, currency: string) {
    const addEndConverted = this.addend.reduce(bank, currency);
    const augEndConverted = this.augend.reduce(bank, currency);
    return new Money(addEndConverted.amount + augEndConverted.amount, currency);
  }
}
