let RandomOrg = require('random-org');

export class App {
  public message = 'Number of Successes';


public numD6 = 0;
public numD4 = 0;
private totalSuccesses = 0;

  private async getRandomInt(min: number, max: number, count: number) {

    if (count > 30){
      console.error('TOO MANY DICE');
      
    }else{
      let random = new RandomOrg({ apiKey: 'ab5f7285-94f1-4c60-8b1d-a8d4a343745b' });
      let randNumInRange = await random.generateIntegers({ min: min, max: max, n: count}).then((result: any) => {
        return result.random.data;
      })
      return randNumInRange;
    }

  }

  private async onClickRollDice(){
    this.message = 'Rolling...';
    this.totalSuccesses = await this.rollDice(this.numD6, this.numD4)

    this.message = this.totalSuccesses.toString();

  }

  public async rollDice(d6s: number, d4s: number): Promise<number>{
    this.totalSuccesses = 0;

    let successes = 0;

    if(d6s > 0){
      let d6Array = await this.getRandomInt(1, 6, d6s);
      d6Array.forEach(element => {
        if (element == 1){
          successes++;
        }
      });
  }

  if(d4s > 0){
    let d4Array = await this.getRandomInt(1, 4, d4s);
    d4Array.forEach(element => {
      if (element == 1){
        successes++;
      }
    });
}

  return successes;
  }
}


