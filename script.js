async function searchMeal() {
    const searchInput = document.getElementById('searchInput').value;

    document.getElementById('mealContainer').innerHTML = '';

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    const meals = data.meals;

    const mealContainer = document.getElementById('mealContainer');

    for (let i = 0; i < 5; i++) {
        const meal = meals[i];
        console.log(meal)

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');

        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p>${meal.strInstructions}</p>
        `;

        mealContainer.appendChild(mealDiv);
    }

    document.getElementById('searchInput').value = ""
}