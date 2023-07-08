// Global variables
const content = document.getElementById('content');

// Function to render the favourite meals
function renderFavouriteMeals() {
  const favourites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favourites.length === 0) {
    content.innerHTML = '<p>No favourite meals added.</p>';
    return;
  }

  content.innerHTML = '';

  favourites.forEach((meal) => {
    const mealCard = document.createElement('div');
    mealCard.classList.add('card');

    const mealName = document.createElement('h3');
    mealName.innerText = meal.strMeal;

    // Remove from favourites button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove from favourites';
    removeButton.addEventListener('click', () => {
      removeFromFavorites(meal);
      renderFavouriteMeals();
    });

    mealCard.appendChild(mealName);
    mealCard.appendChild(removeButton);
    content.appendChild(mealCard);
  });
}

// Function to remove a meal from favourites
function removeFromFavorites(meal) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const updatedFavorites = favorites.filter((favMeal) => favMeal.idMeal !== meal.idMeal);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

// Initial rendering
renderFavouriteMeals();
