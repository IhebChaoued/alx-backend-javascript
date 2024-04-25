const _carData = Symbol('carData');

export default class Car {
  constructor(brand, motor, color) {
    this[_carData] = {
      brand: brand,
      motor: motor,
      color: color
    };
  }

  cloneCar() {
    const { brand, motor, color } = this[_carData];
    return new Car(brand, motor, color);
  }

  get brand() {
    return this[_carData].brand;
  }

  get motor() {
    return this[_carData].motor;
  }

  get color() {
    return this[_carData].color;
  }
}
