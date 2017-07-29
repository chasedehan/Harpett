var main = function () {
	"use strict";

	var solveTVM = function (n, r, PV, FV) { 
	//enter 'X' for missing value, r in percentage

		if (n === 'X') {
			var nA = Math.log(1 + (r/100)) / Math.log(FV / PV);
			return nA;
		}
		else if (r === 'X') {
			var rA = ((Math.pow((FV / PV), (1/n)) - 1) * 100).toFixed(0);
			return rA;
		}
		else if (PV === 'X') {
			var discount = Math.pow((1 + (r/100)),n);
			var PVa = (FV / discount).toFixed(2);
			return PVa;
		}
		else if (FV === 'X') {
			var interest = Math.pow((1 + (r/100)),n);
			var FVa = (PV * interest).toFixed(2);
			return FVa;
		}
	};	


	//setting the values of the questions
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var t = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pv = solveTVM(t, r, 'X', fv);
	var correct = pv;


	$(".question").append("Compute the Present Value of a payment of $" + fv + " received in "
		+ t + " years at a discount rate of " + r + "%."); 


	var addAnswerFromInput = function () {
		var answer;
		
		$(".answer").empty();

		if ($(".answer-input input").val() !== "") {
			answer = $(".answer-input input").val();

			$(".answer").append("You answered: $" + answer);
			$(".answer").append("The correct answer is: $" + correct);
			$(".answer-input input").val("");

			if (answer == correct) {
				window.alert("CORRECT!!!");
			}
			else {
				window.alert("Sorry, try again");
			}
		}
	};

	$(".answer-input button").on("click", function (event) {
		addAnswerFromInput();
	});

	$(".answer-input input").on("keypress", function (event) {
		if (event.keyCode ===13) {
			addAnswerFromInput();
		}
	});
};

$(document).ready(main);