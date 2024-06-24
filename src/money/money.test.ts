// $5 + 10CHF = $10 si le taux est de 2:1
// $5 * 2 = $10
// Mettre “amount” en privé
// Quid des side-effects de Dollar ?

it("multiplies money value with given value", () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
