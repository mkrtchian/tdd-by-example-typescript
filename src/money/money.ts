/*
$5 + 10CHF = $10 si le taux est de 2:1
Mettre “amount” en privé
--> equals()
hashCode()
*/

export class Dollar {
  constructor(public amount: number) {}

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}
