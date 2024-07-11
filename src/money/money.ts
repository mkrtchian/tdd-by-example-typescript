/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  - equals à mettre en commun
  - times à mettre en commun
*/

export class Money {
  constructor(protected readonly _amount: number) {}

  equals(other: Money): boolean {
    return this._amount === other._amount;
  }
}

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Franc {
    return new Franc(this._amount * multiplier);
  }
}
