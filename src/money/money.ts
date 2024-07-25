/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  - times à mettre en commun
Ajouter le concept de currency
*/

export abstract class Money {
  constructor(protected readonly _amount: number) {}

  abstract times(multiplier: number): Money;

  equals(other: Money): boolean {
    return (
      this._amount === other._amount && this.constructor === other.constructor
    );
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier);
  }
}
