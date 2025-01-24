const urlParams = new URLSearchParams(window.location.search);

const restId = urlParams.get("id");
if (restId !== null) showRestaurant(restId);

function findRestaurant(restaurants, restId) {
  for (const rest of restaurants) {
    if (rest.id === restId) return rest;
  }
  return null;
}

async function showRestaurant(restId) {
  const text = await (await fetch('api/restaurants.json')).text();

  const restaurants = JSON.parse(text);
  const restaurant = findRestaurant(restaurants, restId);
  if (restaurant === null) return;

  let template, rendered;

  template = document.getElementById('rest-photo-and-introdution-template').innerHTML;
  rendered = Mustache.render(template, restaurant);
  document.getElementById('rest-photo-and-introdution').innerHTML = rendered;

  template = document.getElementById('left-div-template').innerHTML;
  rendered = Mustache.render(template, restaurant);
  document.getElementById('rest-left-div').innerHTML = rendered;

  template = document.getElementById('tts-chi-template').innerHTML;
  rendered = Mustache.render(template, restaurant);
  document.getElementById('tts-chi').innerHTML = rendered;


  for (let i = 0; i < Math.floor(restaurant.stars); i++) {
    document.getElementById('stars').innerHTML += '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFF06E" /></svg>';
  }

  template = document.getElementById('comment-box-template').innerHTML;
  for (const comment of restaurant.comment) {
    rendered = Mustache.render(template, comment);
    document.getElementById('comment-boxes').innerHTML += rendered;
  }
}
