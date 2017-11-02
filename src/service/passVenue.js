export default (v, u, eatError, drinksError, skipedVenues) => {
  if (skipedVenues.includes(v.name)) {
    return;
  }
  let foods = v.food.map((food) => u.wont_eat.indexOf(food));
  let drinks = v.drinks.map((drink) => u.drinks.indexOf(drink));

  let hasFood = foods.some(p => p === -1);
  let hasDrinks = drinks.some(d => d !== -1);

  if (!hasFood) {
    skipedVenues.push(v.name);
    eatError(v.name, u.name);
  }
  if (!hasDrinks) {
    skipedVenues.push(v.name)
    drinksError(v.name, u.name);
  }
}
