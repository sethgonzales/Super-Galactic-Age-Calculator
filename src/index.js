import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

function handleNameForm (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input').value;
  const ageInput = document.querySelector('#age-input').value;

  const newPerson = new Person (nameInput, ageInput);

}

function handleYearsUntilForm (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input').value;
  const ageInput = document.querySelector('#age-input').value;


}

window.addEventListener("load", function() {
  document.querySelector("#name-age-form").addEventListener("submit", handleNameForm);
  document.querySelector("#years-since-form").addEventListener("submit", handleYearsSinceForm);
  document.querySelector("#years-until-form").addEventListener("submit", handleYearsUntilForm);

});