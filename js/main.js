document.querySelector("button").addEventListener("click", () => {
  getDrink();
  removeIngredients();
});

function getDrink() {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        console.log(data.drinks[i]);
        document.querySelector("#drink-name").innerText =
          data.drinks[i].strDrink;
        document.querySelector("#drink-name-instructions").innerText =
          data.drinks[i].strDrink;
        document.querySelector("img").src = data.drinks[i].strDrinkThumb;
        document.querySelector("#instructions").innerText =
          data.drinks[0].strInstructions;
        document.querySelector("h5").innerHTML = data.drinks[i].strIBA;

        extractIngredients(data.drinks[i]);
        extractMeasures(data.drinks[i]);

        let count = 0;

        function nextDrink(count) {
          let i = count;
          extractIngredients(data.drinks[i]);
          extractMeasures(data.drinks[i]);
          document.querySelector("#drink-name").innerText =
            data.drinks[i].strDrink.toUpperCase();
          document.querySelector("img").src = data.drinks[i].strDrinkThumb;
          document.querySelector("#instructions").innerText =
            data.drinks[i].strInstructions;
          data.drinks[++i];

          if (i === data.drinks.length) {
            i = 0;
          }
        }

        document.querySelectorAll("#nextDrink").forEach((item) => {
          item.addEventListener("click", () => {
            if (count === data.drinks.length - 1) {
              count = 0;
              removeIngredients();
              nextDrink(count);
            } else {
              ++count;
              removeIngredients();
              nextDrink(count);
            }
          });
        });
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelector("#button2").addEventListener("click", randomDrink);

function randomDrink() {
  removeIngredients();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks[0]);
      document.querySelector("#drink-name").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("#instructions").innerText =
        data.drinks[0].strInstructions;
      document.querySelector("#drink-name-instructions").innerText =
        data.drinks[0].strDrink;
      extractIngredients(data.drinks[0]);
      extractMeasures(data.drinks[0]);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// pulling out ingredients
const extractIngredients = (drink) => {
  for (i = 1; i < 16; i++) {
    if (drink[`strIngredient${i}`]) {
      let ingredient = document.createElement("li");
      ingredient.innerText = drink[`strIngredient${i}`];
      document.querySelector(".ingredients").appendChild(ingredient);
    }
  }
};

// Pulling out measures
const extractMeasures = (drink) => {
  for (i = 1; i < 15; i++) {
    if (drink[`strMeasure${i}`]) {
      let measure = document.createElement("li");
      measure.innerText = drink[`strMeasure${i}`];
      document.querySelector(".measures").appendChild(measure);
    }
  }
};

// Removes ingredients and measures
function removeIngredients() {
  document.querySelector(".ingredients").innerText = "";
  document.querySelector(".measures").innerText = "";
}
