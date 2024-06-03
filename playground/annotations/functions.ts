const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return;
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const throwErrorAlways = (message: string): never => {
  throw new Error(message);
};

// Destructuing with Annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeatherTS = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(weather);
};

const logWeatherES2015 = ({ date, weather }) => {
  console.log(weather);
};
