import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

function handleForm (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input').value;
  const newPerson = new Person (nameInput, ageInput);
}
