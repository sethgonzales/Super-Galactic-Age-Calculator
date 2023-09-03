import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

function handleNameForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input').value;
  const ageInput = document.querySelector('#age-input').value;

  const newPerson = new Person(nameInput, ageInput);

  document.getElementById("response-container").removeAttribute("class");
}

function handleYearsSinceForm(event) {
  event.preventDefault();

  const planetSince = document.querySelector('input[name=planet-since]:checked').value;
  const ageSince = document.querySelector('input#age-since').value;
  const yearsSince = newPerson.galacticYearsSince(planetSince, ageSince);

  document.getElementById("planet-years-since").innerText = yearsSince;
  document.getElementById("planet-since").innerText = planetSince;
  document.getElementById("years-since").innerText = yearsSince;

  document.getElementById("years-since-resp").removeAttribute("class");

}

window.addEventListener("load", function () {
  document.querySelector("#name-age-form").addEventListener("submit", handleNameForm);
  document.querySelector("#years-since-form").addEventListener("submit", handleYearsSinceForm);
  // document.querySelector("#years-until-form").addEventListener("submit", handleYearsUntilForm);

});