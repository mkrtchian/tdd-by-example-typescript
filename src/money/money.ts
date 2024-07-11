/*
$5 + 10CHF = $10 si le taux est de 2:1
hashCode()
Duplication entre Dollar et Franc:
  - equals à mettre en commun
  - times à mettre en commun
*/

export class Money {
  constructor(protected _amount: number) {}
}

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this._amount * multiplier);
  }

  equals(dollar: Dollar): boolean {
    return this._amount === dollar._amount;
  }
}

export class Franc {
  constructor(private _amount: number) {}

  times(multiplier: number): Franc {
    return new Franc(this._amount * multiplier);
  }

  equals(franc: Franc): boolean {
    return this._amount === franc._amount;
  }
}
