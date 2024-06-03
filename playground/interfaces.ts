interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}
    Year: ${this.year}
    Broken: ${this.broken}`;
  },
};

const dew = {
  color: 'green',
  carbonated: false,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gm of sugar`;
  },
};

const printReport = (item: Reportable) => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(dew);
