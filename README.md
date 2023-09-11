# Crafted Cocktails

Welcome to Crafted Cocktails, a bar open 24/hrs a day to help inspire you to make homemade cocktail or try something new. 

You can:
- input your alcohol of choice and use the next and previous button to cycle through the catalogue of drinks in that category.
- search for a random drink.

You can view the site <a href="https://craftedcocktails.netlify.app/">here</a>.

<img width="1470" alt="CraftedCocktail" src="https://github.com/AndyMLearmouth92/Cocktail-generator/assets/108182837/4c230260-ce41-410b-b5de-32c88e64f907">

# How It's Made:
Tech used: HTML, CSS, JavaScript, Cocktail API (https://www.thecocktaildb.com/api.php)

The website is built with HTML, CSS and JavaScript which is used to add the interaction with the user and cocktail API. 

Firstly, the user can enter their chosen alcohol and click the 'Search cocktail' button. Once submitted the code will fetch an array of objects containing information about drinks that match the search. The name, image, ingredients, measures and short description of how to make the drink are then added to the DOM for the user to see. Using the 'Next Drink' and 'Previous drink' buttons the user can cycle through the drinks in the array.

Secondly, the user can click the 'Random cocktail' button and the code will fetch an object which contains information about a randomly generated cocktail. The name, image, ingredients, measures and short description of how to make the drink are then added to the DOM for the user to see.

# Optimisations:
+ Using local storage to save a favourite list of drinks.
+ Make the site responsive for mobile and tablet devices.
+ Add alcohol free versions.

# Lessons Learned:
+ First working API
+ Consistent design/styling
+ Cycle through an array.
