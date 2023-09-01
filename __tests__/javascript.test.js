import Person from './../src/person.js';

describe('Person', () => {
  let sethPerson;

  beforeEach(() => {
    sethPerson = new Person("Seth", 26);
  });

  //test 1
  test('it should return the properties of the Person class instance of sethPerson', () => {
    expect(sethPerson).toEqual({ name: "Seth", earthAge: 26 });
  });

  //test 2
  test('it should calculate sethPerson age in Mercury years to one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Mercury", 26);
    expect(planetAge).toEqual(108.3);
  });

  //test 3
  test('it should calculate sethPerson age in Venus years to one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Venus", 26);
    expect(planetAge).toEqual(41.9);
  });

  //test 4
  test('it should calculate sethPerson age in Mars years to one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Mars", 26);
    expect(planetAge).toEqual(13.8);
  });

  //test 5
  test('it should calculate sethPerson age in Jupiter years to one decimal place', () => {
    let planetAge = sethPerson.galacticAge("Jupiter", 26);
    expect(planetAge).toEqual(2.2);
  });

  //test 6
  test('it should return "That is not a planet!" if asking for a planet that does not exist', () => {
    let planetAge = sethPerson.galacticAge("fake-planet", 26);
    expect(planetAge).toEqual("That is not a planet!");
  });

  //test 7
  test('it should calculate years passed on a planet since sethPerson was 24 with one decimal place', () => {
    let yearsSince = sethPerson.galacticYearsSince("Mercury", 24);
    expect(yearsSince).toEqual(8.3);
  });

 //test 8 
 test('it should return "That is not a planet!" if asking for a planet that does not exist', () => {
  let yearsSince = sethPerson.galacticYearsSince("fake-planet", 24);
  expect(yearsSince).toEqual("That is not a planet!");
});


});