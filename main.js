

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
    		recipeList.push('"><h3>' + recipe.title + '</h3><p>serves: ' + recipe.serves + '</p><p>prep: ' + recipe.prep + '</p><p>wait: ' + recipe.wait + '</p><button type="button" class="btn btn-default" data-toggle="modal" data-recipe="' + recipe.designation + '" data-target="#recipe-modal">View Recipe</button></div>');
    	});

    	// add all recipes to main section
    	$('.recipe-block').html(recipeList.join(''));

    });

    $('#recipe-modal').on('show.bs.modal', function(e) {
    	alert('hello');

    	var button = $(e.relatedTarget);
    	var details = button.data('recipe');

    	$.getJSON('recipes.json', function(data) {
    		var recipeTitle = data.recipes[details].title;
    		// var recipeIngredients = [];
    		// var recipeSteps = [];
    		// loop through target recipe data

    		var modal = $(this);
    		modal.find('.modal-title').text(recipeTitle);
    	});
    });

});