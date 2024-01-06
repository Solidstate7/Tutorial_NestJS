const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop;

// Prevent incompatible values
carMakers.push(100);

// when using array methods
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible - arrays can contain multiple types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030=10-12');
importantDates.push(new Date());
importantDates.push(new Date());
