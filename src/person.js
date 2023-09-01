export default class Person {
  constructor(name, age) {
    this.name = name;
    this.earthAge = age;
  }

  galacticAge(planet) {
    let planetAge = null;
    if (planet.toLowerCase() === "mercury") {
      planetAge = parseFloat((this.earthAge * (1 / 0.24)).toFixed(1));
    } else if (planet.toLowerCase() === "venus") {
      planetAge = parseFloat((this.earthAge * (1 / 0.62)).toFixed(1));
    } else if (planet.toLowerCase() === "mars") {
      planetAge = parseFloat((this.earthAge * (1 / 1.88)).toFixed(1));
    } else if (planet.toLowerCase() === "jupiter") {
      planetAge = parseFloat((this.earthAge * (1 / 11.86)).toFixed(1));
    }
    return planetAge;
  }

  galacticYearsSince (planet, ageSince) {
    
  }

}