class Vehicle {
  constructor(public color: string) {}

  // public(default), private, protected
  protected drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car3 extends Vehicle {
  // constructor is automatically inherited
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public drive(): void {
    //override
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
const car3 = new Car3(4, 'red');
// vehicle.drive();
// vehicle.honk();
car3.startDrivingProcess();
car3.drive();

console.log(car3.color);
