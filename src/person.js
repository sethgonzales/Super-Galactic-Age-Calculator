export default class Person {
  constructor(name, age) {
    this.name = name;
    this.earthAge = age;
  }

  galacticAge(planet, age) {
    let planetAge = null;
    if (planet.toLowerCase() === "mercury") {
      planetAge = (age * (1 / 0.24)).toFixed(1);
    } else if (planet.toLowerCase() === "venus") {
      planetAge = (age * (1 / 0.62)).toFixed(1);
    } else if (planet.toLowerCase() === "mars") {
      planetAge = (age * (1 / 1.88)).toFixed(1);
    } else if (planet.toLowerCase() === "jupiter") {
      planetAge = (age * (1 / 11.86)).toFixed(1);
    } else {
      return "That is not a planet!"
    }
    return parseFloat(planetAge);
  }

  galacticYearsSince (planet, ageSince) {
    // ageDiff = this.earthAge - ageSince;
    // let yearsSince = null;
    // if (planet.toLowerCase() === "mercury") {
    //   yearsSince = galacticAge(planet);
    // }
  }

}