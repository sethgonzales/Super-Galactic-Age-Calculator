import Person from './../src/person.js';

describe('Person', () => {
  let sethPerson;

  beforeEach(() => {
    sethPerson = new Person("Seth", 26);
  });

  test('it should return the properties of the Person class instance of sethPerson', () => {
    expect(sethPerson).toEqual({ name: "Seth", earthAge: 26 });
  });

  test('it should calculate sethPerson age in Mars years and add Mars age to Person class', () => {
    expect(sethPerson.marsAge).toEqual(13.8);
  });
});