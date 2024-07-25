/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  - times à mettre en commun
--> Ajouter le concept de currency
Supprimer le test de multiplication du Franc
*/

export abstract class Money {
  protected _currency: string;

  constructor(
    protected _amount: number,
    currency: string,
  ) {
    this._currency = currency;
  }

  abstract times(multiplier: number): Money;

  equals(other: Money): boolean {
    return (
      this._amount === other._amount && this.constructor === other.constructor
    );
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

  currency() {
    return this._currency;
  }
}

class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier, this._currency);
  }

  currency() {
    return this._currency;
  }
}
