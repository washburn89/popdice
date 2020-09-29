let RandomOrg = require('random-org');

export class App {
  public successes = 'Number of Successes';


public numD6 = 0;
public numD4 = 0;
private totalSuccesses = 0;

  private async getRandomIntsFromOneToMax(max: number, count: number) {

    if (count > 30){
      console.error('TOO MANY DICE');
      
    }else{
      let random = new RandomOrg({ apiKey: 'ab5f7285-94f1-4c60-8b1d-a8d4a343745b' });
      let randNumInRange = await random.generateIntegers({ min: 1, max: max, n: count}).then((result: any) => {
        return result.random.data;
      }, (issue: any) => {
        // if random.org fails then log it and return a psuedo random number array
        console.log(issue);
        let numArr: number[] = [];
        for(let i = count; i > 0 ; i--){
          // only gives numbers from 1 to max 
          numArr.push(Math.floor(Math.random() * max) + 1)
        }
        return  numArr;

      }
      );
      return randNumInRange;
    }

  }

  private async onClickRollDice(){
    this.successes = 'Rolling...';
    this.totalSuccesses = await this.rollDice(this.numD6, this.numD4)

    this.successes = this.totalSuccesses.toString();

  }

  public async rollDice(d6s: number, d4s: number): Promise<number>{
    this.totalSuccesses = 0;

    let successes = 0;

    if(d6s > 0){
      let d6Array = await this.getRandomIntsFromOneToMax(6, d6s);
      d6Array.forEach(element => {
        if (element == 1){
          successes++;
        }
      });
  }

  if(d4s > 0){
    let d4Array = await this.getRandomIntsFromOneToMax(4, d4s);
    d4Array.forEach(element => {
      if (element == 1){
        successes++;
      }
    });
}

  return successes;
  }
}


