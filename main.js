document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipes-container");

    async function loadRecipeList() {
        const res = await fetch("https://dummyjson.com/recipes");
        const json = await res.json();
        displayRecipeList(json.recipes);
    }

    function displayRecipeList(list) {
        list.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");

            const recipeImage = document.createElement("img");
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeDiv.appendChild(recipeImage);

            const recipeName = document.createElement("h2");
            recipeName.textContent = recipe.name;
            recipeDiv.appendChild(recipeName);

            const recipeIngredients = document.createElement("p");
            recipeIngredients.classList.add("ingredients");
            recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}`;
            recipeDiv.appendChild(recipeIngredients);

            const recipeInstructions = document.createElement("p");
            recipeInstructions.classList.add("instructions");
            recipeInstructions.innerHTML = `<strong>Instructions:</strong> ${recipe.instructions.join(" ")}`;
            recipeDiv.appendChild(recipeInstructions);

            const recipeRating = document.createElement("div");
            recipeRating.classList.add("rating");
            recipeRating.innerHTML = `
                <span>★ ${recipe.rating}</span>
                <strong>${recipe.reviewCount} Ratings</strong>
            `;
            recipeDiv.appendChild(recipeRating);

            recipeContainer.appendChild(recipeDiv);
        });
    }

    loadRecipeList();
});
