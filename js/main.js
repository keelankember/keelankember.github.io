	function askQuestions() {



	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	//If the user's first name is 'General' and the last name is NOT 'Assembly', then greet the general! 
	//(Hint: Use console.log)

	var fullName = firstName + ' ' + lastName;

	if (firstName. toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log ('Greetings, General!');
	}

	var faveColour = prompt('What\'s your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue'||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h2').css('color', faveColour);

	}
	}

$('h2').text('Hello ' + fullName);

var age = prompt('How old are you?')
age = parseInt(age);




if (age >= 18) {
	console.log('User is an adult.');
} else if (age >= 13) {
	console.log ('User is a teenager');
} else {
	console.log ('User is a child');
}




// When the page has loaded
$(function() {

	// Find all the content and hide it
	$('h3').next().hide();

	//When the user clicks on an h3
	$('h3')	.on('click', function() {


		//Find the next element and toggle it
		$(this).next().slideToggle(100);

	});


});