$(document).ready(function() {
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
	$('.recipe-item').hide()
}


