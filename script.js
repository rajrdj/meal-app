// Global variables
const searchInput = document.getElementById('searchInput');
const content = document.getElementById('content');
const API_URL = 'https://www.themealdb.com/api/json/v1/1/';
const favouritesButton = document.getElementById('favouritesButton');
// Function to fetch search results from the API
async function searchMeals(query) {
  const response = await fetch(`${API_URL}search.php?s=${query}`);
  const data = await response.json();
  return data.meals;
}

// Event listener for favourites button

favouritesButton.addEventListener('click', () => {
  window.location.href = 'favourites.html';
});

// Function to render search results
// Function to render search results
function renderSearchResults(results) {
    content.innerHTML = '';
  
    results.forEach((meal) => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('card');
  
      const mealName = document.createElement('h3');
      mealName.innerText = meal.strMeal;
  
      // Favourite button
      const favButton = document.createElement('button');
      favButton.innerText = 'Favourite';
      favButton.addEventListener('click', () => {
        addToFavourites(meal);
      });
  
      // Click event to navigate to the meal detail page
      mealCard.addEventListener('click', () => {
        window.location.href = `meal.html?id=${meal.idMeal}`;
      });
  
      mealCard.appendChild(mealName);
      mealCard.appendChild(favButton);
      content.appendChild(mealCard);
    });
  }
  

// Function to add a meal to favourites
// ...

// Function to add a meal to favourites
// Function to add a meal to favourites
function addToFavourites(meal) {
    // Check if favorites already exist in local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Check if the meal is already in favorites
    const isAlreadyFavorited = favorites.some((favorite) => favorite.idMeal === meal.idMeal);
  
    // If not already favorited, add to favorites
    if (!isAlreadyFavorited) {
      favorites.push(meal);
  
      // Update favorites in local storage
      localStorage.setItem('favorites', JSON.stringify(favorites));
  
      // Update UI
      const favButton = event.target;
      favButton.innerText = 'Remove from Favorites';
      favButton.removeEventListener('click', addToFavourites);
      favButton.addEventListener('click', () => {
        removeFromFavorites(meal);
      });
    }
  }
  
  // ...
  
  
  // Function to render search results
function renderSearchResults(results) {
    content.innerHTML = '';
  
    if (results.length === 0) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.innerText = 'No results found.';
      content.appendChild(noResultsMessage);
    } else {
      results.forEach((meal) => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('card');
  
        const mealName = document.createElement('h3');
        mealName.innerText = meal.strMeal;
  
        // Favourite button
        const favButton = document.createElement('button');
        favButton.innerText = 'Favourite';
        favButton.addEventListener('click', () => {
          addToFavourites(meal);
        });
  
        // Click event to navigate to the meal detail page
        mealCard.addEventListener('click', () => {
          window.location.href = `meal.html?id=${meal.idMeal}`;
        });
  
        mealCard.appendChild(mealName);
        mealCard.appendChild(favButton);
        content.appendChild(mealCard);
      });
    }
  }
  
  
  // ...
  
  

// Event listener for search input
searchInput.addEventListener('input', async (e) => {
  const query = e.target.value;
  const results = await searchMeals(query);
  renderSearchResults(results);
});


// Initial rendering
renderSearchResults([]);

