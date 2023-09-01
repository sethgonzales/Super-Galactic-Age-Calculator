import Person from './../src/person.js';

describe('Person', () => {
  let sethPerson;

  beforeEach(() => {
    sethPerson = new Person("Seth", 26);
  });

  test('it should return the properties of the Person class instance of sethPerson', () => {
    expect(sethPerson).toEqual({ name: "Seth", earthAge: 26 });
  });

  test('it should calculate sethPerson age in Mercury years and values to Person class with one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Mercury");
    expect(planetAge).toEqual(108.3);
  });

  test('it should calculate sethPerson age in Mercury years and values to Person class with one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Venus");
    expect(planetAge).toEqual(41.9);
  });
  

});