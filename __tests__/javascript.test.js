import Person from './../src/person.js';

describe('Person', () => {
  let sethPerson;

  beforeEach(() => {
    sethPerson = new Person("Seth", 26);
  });
  test('it should return the properties of the Person class instance of newPerson', () => {
    expect(sethPerson).toEqual({ name: "Seth", age: "26" });
  });

});