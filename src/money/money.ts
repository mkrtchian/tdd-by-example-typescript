class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }

  equals(object: Money) {
    return (
      this.amount === object.amount && this.constructor === object.constructor
    );
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
