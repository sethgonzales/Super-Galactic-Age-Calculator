import Person from './../src/person.js';

describe('Person', () => {
  let sethPerson;

  beforeEach(() => {
    sethPerson = new Person("Seth", 26);
  });

  test('it should return the properties of the Person class instance of sethPerson', () => {
    expect(sethPerson).toEqual({ name: "Seth", earthAge: 26 });
  });

  test('it should calculate sethPerson age in different planetary years and values to Person class with one decimal place', () => {
    sethPerson.galacticAge();
    expect(sethPerson).toEqual({ name: "Seth", earthAge: 26, mercuryAge: 108.3, venusAge: 41.9, marsAge: 13.8, jupiterAge: 2.2});
  });
});