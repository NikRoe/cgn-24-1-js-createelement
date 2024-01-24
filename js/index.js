console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Approach with innerHTML

  cardContainer.innerHTML = `
  <li class="card">
  <h2>Card</h2>
  <p>${textInput.value}</p>
  </li>
  `;

  // Approach with .createElement

  // clearing the cardContainer
  // cardContainer.innerHTML = "";

  // creating a new list item
  // const newCard = document.createElement("li");

  // adding a class to newCard
  //   newCard.classList.add("card");

  // updating the textContent of newCard
  //   newCard.textContent = textInput.value;

  // adding newCard to the DOM as a child of cardContainer
  // cardContainer.append(newCard);
});
