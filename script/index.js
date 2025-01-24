async function showRestaurants() {
  const text = await (await fetch('api/restaurants.json')).text();
  const restaurants = JSON.parse(text);

  function showCatalog(divId, typeName) {
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      if (restaurant.type["zh-hk"] !== typeName) continue;

      let template = document.getElementById('rest-card-template').innerHTML;
      let rendered = Mustache.render(template, restaurant);
      document.getElementById(divId).innerHTML += rendered;
    }
  }

  showCatalog('japanese-rests', '日式');
  showCatalog('taiwanese-rests', '台式');
  showCatalog('western-rests', '西式');
  showCatalog('hong-kong-rests', '港式');
  showCatalog('vietnamese-rests', '越式');
  showCatalog('thai-rests', '泰式');
  showCatalog('others-rests', '其他');

  restaurants.sort((a, b) => b.suggestions - a.suggestions);
  console.log(restaurants)
  for (let i = 0; i < restaurants.length && i < 3; i++) {
    const restaurant = restaurants[i];
    let template = document.getElementById('rest-card-template').innerHTML;
    let rendered = Mustache.render(template, restaurant);
    document.getElementById("suggestion-rests").innerHTML += rendered;
  }
}

showRestaurants();
