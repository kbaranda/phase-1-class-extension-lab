class Polygon{
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    if (!Array.isArray(this.sides)){
      return;
    }
    let sum = 0;
    for (let i of this.sides){
      sum += i;
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)){
      return;
    }
    if (this.sides.length !== 3){
      return;
    }
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    return ((a + b > c) && (a + c > b) && (c + b > a));
  }
}

class Square extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)){
      return;
    }
    if (this.sides.length !== 4){
      return;
    }
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    let d = this.sides[3];
    return ((a === b) && (a === c) && (a === d));
  }
  
  get area() {
    if (!Array.isArray(this.sides)){
      return;
    }
    if (this.sides.length !== 4){
      return;
    }
    return this.sides [0] * this.sides [1];
  }
}