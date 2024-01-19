# Enums

```ts
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
```

1. Follow near-identical syntax rules as normal objects
2. Creates an object with the same keys and values when converted from TS to JS
3. Primary goal is to signal to other engineers that these are all closely related values
4. Use whenever we have a small `fixed set of values` that are all closely related and known at compile time

## Type assertion

```ts
row[5] as MatchResult;
```

## Generics

1. Like function arguments, but for types in class/function definitions
2. Allows us to define the type of a property/argument/return value at a future point
3. Used heavily when writing reusable code

### Ideas behind Generics

```ts
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
```

Instead of hardcoding, receive an argument.

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

```ts
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}
```

In the same way:

```ts
class HoldAnything<Type> {
  data: Type;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
console.log(typeof holdNumber.data);
// number

const holdString = new HoldAnything<string>();
console.log(typeof holdString.data);
// string
```

## Another refactoring using interface

### 1. Inheritance:

Characterized by an `is a` relationship between two classes.

```ts
abstract class Anything {}
class Something extends Anything {}
```

Something is anything.

#### Examples

```ts
class Window {
  open: boolean;
  toggleOpen(): void;
  height: number;
  width: number;
  area(): number;
}
```

```ts
class Wall {
  color: string;
  height: number;
  width: number;
  area(): number;
}
```

Both can be derived from an abstract class:

```ts
abstract class Rectangle {
  height: number;
  width: number;
  area(): number;
}
```

While both can extend Rectangle, it's possible for windows to be circular.

```ts
abstract class Circle {
  radius: number;
  area(): number;
}

class Window extends Circle {
  open: boolean;
  toggleOpen(): void;
}
```

In this case, multiple Window classes are required, leading to duplication.

#### Composition method using interfaces can reduce this duplication.

### 2. Composition:

Characterized by a `has a` relationship between two classes

```ts
// Defining some basic classes
class Engine {
  start() {
    console.log('Engine starting...');
  }
}

class Wheels {
  roll() {
    console.log('Wheels rolling...');
  }
}

// Car class composed of Engine and Wheels
class Car {
  private engine: Engine;
  private wheels: Wheels;

  constructor() {
    this.engine = new Engine();
    this.wheels = new Wheels();
  }

  drive() {
    this.engine.start();
    this.wheels.roll();
    console.log('Car is moving...');
  }
}

// Usage
const myCar = new Car();
myCar.drive();
```

Warning: Composition is not a multiple inheritance.
