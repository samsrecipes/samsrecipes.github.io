

jQuery(document).ready(function() {

	// read JSON file for list of recipes
    $.getJSON('recipes.json', function(data) {

    	var recipeList = [];

    	// loop through list of recipes
    	$.each(data.recipes, function(key, recipe) {
    		recipeList.push('<div class="');
    		for (var i in recipe.categories) {
    			recipeList.push(recipe.categories[i] + ' ');
    		}
    		recipeList.push('"><h3>' + recipe.title + '</h3><p>serves: ' + recipe.serves + '</p><p>prep: ' + recipe.prep + '</p><p>wait: ' + recipe.wait + '</p></div>');
    	});

    	// add all recipes to main section
    	$('.recipe-block').html(recipeList.join(''));

    });

});