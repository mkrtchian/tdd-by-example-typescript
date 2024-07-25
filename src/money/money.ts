/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  --> times à mettre en commun
Supprimer le test de multiplication du Franc
*/

export abstract class Money {
  constructor(
    protected _amount: number,
    protected _currency: string,
  ) {}

  abstract times(multiplier: number): Money;

  equals(other: Money): boolean {
    return (
      this._amount === other._amount && this.constructor === other.constructor
    );
  }

  currency() {
    return this._currency;
  }

  static dollar(amount: number) {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number) {
    return new Franc(amount, "CHF");
  }
}

class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this._amount * multiplier, this._currency);
  }
}

class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier, this._currency);
  }
}
