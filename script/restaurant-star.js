function onCheckboxChange() {
  const inputs = document.querySelectorAll(".rest-stars-card > .rest-stars-checkbox > input[type=checkbox]");

  let checked = 0;
  for (let i = 0; i < inputs.length; i++) checked += inputs[i].checked ? 1 : 0;

  if (checked >= 3) {
    for (let i = 0; i < inputs.length; i++) inputs[i].disabled = !inputs[i].checked;
  } else {
    for (let i = 0; i < inputs.length; i++) inputs[i].disabled = false;
  }
}

async function showRestaurants() {
  const text = await (await fetch('api/restaurants.json')).text();
  const restaurants = JSON.parse(text);

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    const template = document.getElementById('rest-card-template').innerHTML;
    const rendered = Mustache.render(template, restaurant);
    document.getElementById('rests').innerHTML += rendered;
  }
}

showRestaurants();
