// Get the meal ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('id');

// Function to fetch meal details from the API
async function getMealDetails() {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals[0];
}

// Function to render meal details
function renderMealDetails(meal) {
  const mealImage = document.getElementById('mealImage');
  const mealName = document.getElementById('mealName');
  const mealInstructions = document.getElementById('mealInstructions');

  mealImage.src = meal.strMealThumb;
  mealName.innerText = meal.strMeal;
  mealInstructions.innerText = meal.strInstructions;
}

// Fetch meal details and render them
getMealDetails().then((meal) => {
  renderMealDetails(meal);
});

