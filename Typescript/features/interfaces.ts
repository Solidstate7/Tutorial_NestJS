interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`
  Name: ${name}
  Year: ${year}
  Broken?: ${broken}`);
};

printVehicle(oldCivic);
