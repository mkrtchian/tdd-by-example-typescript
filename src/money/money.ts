/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  - times à mettre en commun
--> Ajouter le concept de currency
Supprimer le test de multiplication du Franc
*/

export abstract class Money {
  constructor(protected readonly _amount: number) {}

  abstract times(multiplier: number): Money;

  equals(other: Money): boolean {
    return (
      this._amount === other._amount && this.constructor === other.constructor
    );
  }

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }
}

class Dollar extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = "USD";
  }

  times(multiplier: number): Money {
    return new Dollar(this._amount * multiplier);
  }

  currency() {
    return this._currency;
  }
}

class Franc extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = "CHF";
  }

  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier);
  }

  currency() {
    return this._currency;
  }
}
