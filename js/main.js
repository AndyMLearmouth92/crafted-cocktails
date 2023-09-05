document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        setTimeout(function () {
          console.log(data.drinks[i]);
          document.querySelector("#drink-name").innerText =
            data.drinks[i].strDrink;
          document.querySelector("img").src = data.drinks[i].strDrinkThumb;
          document.querySelector("h3").innerText =
            data.drinks[i].strInstructions;
          document.querySelector("#Ingredient1").innerHTML =
            data.drinks[i].strIngredient1;
          document.querySelector("#Ingredient2").innerHTML =
            data.drinks[i].strIngredient2;
          document.querySelector("#Ingredient3").innerHTML =
            data.drinks[i].strIngredient3;
          document.querySelector("#Ingredient4").innerHTML =
            data.drinks[i].strIngredient4;
          document.querySelector("#Ingredient5").innerHTML =
            data.drinks[i].strIngredient5;
          document.querySelector("#Ingredient6").innerHTML =
            data.drinks[i].strIngredient6;
          document.querySelector("#Ingredient7").innerHTML =
            data.drinks[i].strIngredient7;
          document.querySelector("#Ingredient8").innerHTML =
            data.drinks[i].strIngredient8;
          document.querySelector("h5").innerHTML = data.drinks[i].strIBA;
        }, 3000 * i);
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelector("#button2").addEventListener("click", randomDrink);

function numOfIngredients(drinkName) {
  let i = 0;
  for (i = 1; i < 16; i++) {
    let ingredient = document.createElement("li");
    ingredient.innerText = drinkName[`strIngredient${i}`];

    if (ingredient.innerText !== "") {
      document.querySelector(".ingredients").appendChild(ingredient);
    }
  }
}

function getMeasures(drinkName) {
  let i = 0;
  for (i = 1; i < 15; i++) {
    let measurement = document.createElement("li");
    measurement.innerText = drinkName[`strMeasure${i}`];

    if (measurement.innerText !== "") {
      document.querySelector(".measurements").appendChild(measurement);
    }
  }
}

function randomDrink() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks[0]);
      document.querySelector("#drink-name").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
      document.querySelector("#Ingredient1").innerHTML =
        data.drinks[0].strIngredient1;
      document.querySelector("#Ingredient2").innerHTML =
        data.drinks[0].strIngredient2;
      document.querySelector("#Ingredient3").innerHTML =
        data.drinks[0].strIngredient3;
      document.querySelector("#Ingredient4").innerHTML =
        data.drinks[0].strIngredient4;
      document.querySelector("#Ingredient5").innerHTML =
        data.drinks[0].strIngredient5;
      document.querySelector("#Ingredient6").innerHTML =
        data.drinks[0].strIngredient6;
      document.querySelector("#Ingredient7").innerHTML =
        data.drinks[0].strIngredient7;
      document.querySelector("#Ingredient8").innerHTML =
        data.drinks[0].strIngredient8;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
