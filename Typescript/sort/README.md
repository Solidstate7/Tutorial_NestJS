# Sorting Algorithm with TS

## Union Type

```js
type sortable = number[] | string;

class Sorter {
  constructor(public collection: sortable) {}

  sort(): void {
    this.collection[0] = 's'
    // this is impossible, which requires type guards
  }
}
```

## Type Guard

1. Narrow type of a value to a primitive type

```js
if (typeof this.collection === 'string') {
  // coditional logic goes here
}
```

2. Narrow down every other type of value

```js
if (this.collection instanceof Array) {
  // the code gets executed when the property is only an array
  // and TS also denotes which methods are accessible
}
```

## Why is this bad?

Because the function is not extensible or scalable. Every time a new type is added it must be written as conditionals.

Use interface instead.

## Separate class for number arrays

```js
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
