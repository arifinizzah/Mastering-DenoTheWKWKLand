class Archer {
  static totalArrow = 20;
  shoot(): void {
    Archer.totalArrow--;
    console.log(`Total Arrow left : ${Archer.totalArrow}`);
  }
}

const Maudy = new Archer();
Maudy.shoot();

const Gun = new Archer();
Gun.shoot();

/* output :
  Total Arrow left : 19
  Total Arrow left : 18 */
