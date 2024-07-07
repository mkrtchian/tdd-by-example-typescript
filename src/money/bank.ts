import { Expression } from "./expression";

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
    return source.reduce(this, to);
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
