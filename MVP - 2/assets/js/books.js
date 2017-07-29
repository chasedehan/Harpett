//books.js
//Script to populate the textbook page on Harpett

 var main = function() {

	var subjectSelected = function (selected) { //enter specific question values, also checks if part of quiz

		$(".content").empty();

		$(".content").append("<section class='question-words'>" + selected + "</section>" +
			"<section class='answer-input'>  </section>");

		//create loop to pull in the links and titles to the books.
		
	};

 	var bookSection = ['Accounting', 'Economics', "Finance", "Information Systems", "Marketing", "Management", "Statistics"];
//Fuck this below, lets figure out how to input the JSON from a spreadsheet or whatever.
 	var book = {};
 	book.www= [];			//link to the open book
 	book.names = []; 		//Title and authors
 	book.section = [];		//Accounting, econ, etc.
 	book.subsection = [];	//micro, macro, money and banking, etc.
 		//We split into subsections to break up the books more because there are a number 

	//Click handler is below
	//This is the functionality
	$(".sidebar").empty();
	$(".sidebar").append("<header><h3>Subject Selection</h3></header>");
	//populating the question links
	for (i=0; i < bookSection.length; i++) {
		$(".sidebar").append("<input type='submit' class ='button' value='" + bookSection[i] + "'>");
	}

	


	//really should place these 'values' in an array that can be called, especially since there will be a large number of additional questions inserted.
	$(".sidebar input[value='" + bookSection[0] + "']").on("click", function (event) {
		subjectSelected(bookSection[0]);
	});
	$(".sidebar input[value='" + bookSection[1] + "']").on("click", function (event) {
		subjectSelected(bookSection[1]);
	});
	$(".sidebar input[value='" + bookSection[2] + "']").on("click", function (event) {
		subjectSelected(bookSection[2]);
	});
	$(".sidebar input[value='" + bookSection[3] + "']").on("click", function (event) {
		subjectSelected(bookSection[3]);
	});
	$(".sidebar input[value='" + bookSection[4] + "']").on("click", function (event) {
		subjectSelected(bookSection[4]);
	});
	$(".sidebar input[value='" + bookSection[5] + "']").on("click", function (event) {
		subjectSelected(bookSection[5]);
	});
	$(".sidebar input[value='" + bookSection[6] + "']").on("click", function (event) {
		subjectSelected(bookSection[6]);
	});
};
$(document).ready(main); 