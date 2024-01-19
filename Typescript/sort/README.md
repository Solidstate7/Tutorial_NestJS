# Sorting Algorithm with TS

## Union Type

```ts
type sortable = number[] | string;

class Sorter {
  constructor(public collection: sortable) {}

  sort(): void {
    this.collection[0] = 's';
    // this is impossible, which requires type guards
  }
}
```

## Type Guard

1. Narrow type of a value to a primitive type

```ts
if (typeof this.collection === 'string') {
  // coditional logic goes here
}
```

2. Narrow down every other type of value

```ts
if (this.collection instanceof Array) {
  // the code gets executed when the property is only an array
  // and TS also denotes which methods are accessible
}
```

## Why is this bad?

Because the function is not extensible or scalable. Every time a new type is added it must be written as conditionals.

Use interface instead.

## Separate class for number arrays

```ts
export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left] > this.data[right];
  }

  swap(left: number, right: number): void {
    const leftHand = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftHand;
  }
}
```

get keyword is used so that the getter gets the value without being explicitly invoked.

## Interface Sortable

```ts
interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}
```

## Refactoring through class inheritance

How to avoid feeding an instance every time sort() is called?

```ts
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
```

Each class should extend Sorter without accessing collection.

```ts
export class Sorter {
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // doesn't have the method!
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

But Typescript doesn't know Sorter is an abstract class (base class that won't be instantiated), hence an error.
Provide method signatures in the abstract class.

```ts
export abstract class Sorter {
  abstract compare(left: number, right: number): boolean;
  abstract swap(left: number, right: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

## Interfaces vs Abstract Classes

### Interface

1. Sets up a contract between different classes
2. Use when we have very different objects that we want to work together
3. Promotes loose coupling

### Inheritance / Abstract Classes

1. Sets up a contract between different classes
2. Use when we are trying to build up a definition of an object
3. Strongly couples classes together
