class Vehicle {
  constructor(private color: string) {}

  protected horn(): void {
    console.log('Beep beep!');
  }

  public getColor(): string {
    return this.color;
  }
}

class Car extends Vehicle {
  constructor(color: string, private wheels: number) {
    super(color);
  }

  public startDriving(): void {
    this.drive();
    this.horn();
  }

  private drive(): void {
    console.log('Car is moving!');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.getColor());

const car = new Car('Red', 2);
car.startDriving();
console.log(car.getColor());
