

jQuery(document).ready(function() {

	// read JSON file for list of recipes
    $.getJSON('recipes.json', function(data) {

    	var recipeList = [];

    	// loop through list of recipes
    	$.each(data.recipes, function(key, recipe) {
    		recipeList.push('<div><h3>' + recipe.title + '</h3>');
    		for (var i in recipes.categories) {
    			recipeList.push('<p>' + recipes.categories[i] + '</p>');
    		}
    		recipeList.push('<p>serves: ' + recipe.serves + '</p></div>');
    	});

    	// add all recipes to main section
    	$('.recipe-block').html(recipeList.join(''));

    });

});