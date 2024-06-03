const carMakers: string[] = ['ford', 'toyota', 'honda'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCarTwo = carMakers.pop();

// Prevent incompatible values
carMakers.push('100');

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-07-25');
importantDates.push(new Date());