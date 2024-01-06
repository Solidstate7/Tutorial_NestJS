interface Reportable {
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar!`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic2);
printSummary(drinks);
