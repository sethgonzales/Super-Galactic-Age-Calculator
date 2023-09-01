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
    sethPerson.galacticAge("Mercury", 26);
    expect(sethPerson.galacticAge("Mercury", 26)).toEqual(108.3);
  });


});