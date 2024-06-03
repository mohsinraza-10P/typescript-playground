const profile = {
  fullName: 'alex',
  age: 24,
  coords: {
    lat: 67.25,
    long: 89.24,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, fullName }: { age: number; fullName: string } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
