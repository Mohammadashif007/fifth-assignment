const search = document.getElementById("search");
const submit = document.getElementById("submit");
const mealEl = document.getElementById("meal");
const resultHeading = document.getElementsByClassName("result-heading");
const single_mealEl = document.getElementById("single-meal");

function searchMeal(e) {
    e.preventDefault();

    single_mealEl.innerHTML = "";

    const term = search.value;
    if(term.trim()){

    }
    else{
        fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${trim}`)
        .then(res => res.json())
        .then(data => {
            resultHeading.innerHTML = `<h2>Search result for ${term}`;
            if(data.meals === null){
                resultHeading.innerHTML = `<h2>There are no result for ${term}`;
            }
            else {
                mealEl.innerHTML = data.meals.map(
                    meal => `
                    <div class="meal">
                    <img src="${meal.strMealThumb}>
                    </div>
                    `
                )
            }
        });
    }
}

submit.addEventListener('submit',searchMeal);