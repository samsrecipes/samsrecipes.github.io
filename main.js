

jQuery(document).ready(function() {

	// read JSON file for list of recipes
    $.getJSON('recipes.json', function(data) {

    	var recipeList = [];

    	// loop through list of recipes
    	$.each(data.recipes, function(key, recipe) {
    		recipeList.push('<div class="recipe-item col-md-4 col-sm-4 ');
    		for (var i in recipe.categories) {
    			recipeList.push(recipe.categories[i] + ' ');
    		}
    		recipeList.push('"><div class="panel panel-default"><div class="panel-heading">' + recipe.title + '</div><div class="panel-body"><p>serves: ' + recipe.serves + '</p><p><img class="card-icon" src="img/clock.svg">prep: ' + recipe.prep + '</p><p><img class="card-icon" src="img/clock.svg">wait: ' + recipe.wait + '</p><button type="button" class="btn btn-default btn-view-recipe" data-toggle="modal" data-designation="' + recipe.designation + '" data-target="#recipe-modal">View Recipe</button></div></div></div>');
    	});

    	// add all recipes to main section
    	$('.recipe-block').html(recipeList.join(''));

    });

    $('#recipe-modal').on('show.bs.modal', function(e) {

    	var button = $(e.relatedTarget);
    	var details = button.data('designation');

    	var recipeTitle = "";
    	var recipeIngredients = [];
    	var recipeSteps = [];

    	$.getJSON('recipes.json', function(data) {
    		recipeTitle = data.recipes[details].title;
    		for (var j in data.recipes[details].ingredients) {
    			recipeIngredients.push('<li>' + data.recipes[details].ingredients[j] + '</li>');
    		};
    		for (var k in data.recipes[details].instructions) {
    			recipeSteps.push('<li>' + data.recipes[details].instructions[k] + '</li>');
    		};

    		$('.modal-title').html(recipeTitle);
    		$('.modal-ingredients-list').html(recipeIngredients);
    		$('.modal-steps-list').html(recipeSteps);

    	});

    });

    // Sidebar filtering
    $('#appetizer-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.appetizer').show();
	});

	$('#bread-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.bread').show();
	});

	$('#breakfast-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.breakfast').show();
	});

	$('#dessert-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.dessert').show();
	});

	$('#dinner-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.dinner').show();
	});

	$('#smoothie-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.smoothie').show();
	});

	$('#snack-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.snack').show();
	});

	$('#soup-nav').click(function(e) {
		e.preventDefault;
		hideAllRecipes();
		$('.soup').show();
	});

	$('#all-nav').click(function(e) {
		e.preventDefault;
		$('.recipe-item').show();
	});

	$('.nav-sidebar li').click(function(e) {
		e.preventDefault();
		removeActive();
		$(this).addClass('active');
	});

});

function removeActive() {
	$('.nav-sidebar li').removeClass('active');
}

function hideAllRecipes() {
	$('.recipe-item').hide();
}