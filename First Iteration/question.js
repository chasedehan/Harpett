	//This document will build much of the question functionality when calling questions
	//I wan to make this somewhat streamlined to increase readibility and reduce computation time for the questions


	//Is the question a multiple choice or fill in blank?
		//Wait for now, MC will contain less algorithmic questions

	//The below variables are global so that I can transfer values from the question handler to the quiz.
	//Should be passing these through functions, but I'm not.
	var globalVar = 0; 	
	var quizTrans = {};
	quizTrans.words = [];
	quizTrans.correct = [];
	quizTrans.submit = [];

	//Arrays of random names and variables to insert into questions (GLOBAL)
	var femaleName = ['Karie', 'Sabrina', 'Harper', 'Bennett', 'Elleve', 'Thora', 'Frannie', 'Wilma', 'Virginia', 'Dawn', 'Elizabeth', 'Marie'];
	var maleName = ['Chase', 'Nick', 'Gilbert', 'George', 'Atticus', 'Ansel', 'Oliver', 'Lloyd', 'Maurice', 'Raynor', 'Joseph', 'Karl', 'John Maynard'];
	var surName = ['Warfield', 'Hiteshew', 'Allison', 'Kasper', 'DeHan', 'Vienneau', 'Mikeska', 'Schumpeter', 'Keynes', 'Marx', 'Polanyi'];
	var algoComp = ['BMW', 'Apple Computers', 'Microsoft', 'Facebook', 'ABC Inc.', 'BAMEB Motorcycles', 'Tofrandi Naturals', 'RentBooks.com', 'DeNeau Enterprises', 'Parker Sled Manufacturing'];
	var bName = ['Prosperity Bank', 'Mountain America Credit Union', 'Wells Fargo', 'Palmetto Bank', 'Bank of America', 'Chase Bank', 'Simple Bank', 'Moven Bank'];
	var invBank = ['J.P. Morgan', 'Goldman Sachs', 'Merrill Lynch', 'Morgan Stanley', 'Citigroup', 'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse'];
	
	//GLOBAL variables on question types
	var question = {};
	question.Name = ['Solve for Present Value', 'Solve for Number of Time Periods', 'Solve for Discount Rate', 'Solve for Future Value', 
		'Random Present Value', 'PV of Fixed Payments', 'Basic Annuity', 'Effective Annual Rate', 'Coupon Bond', 'Bonds Expanded', 'Floatation Costs', 'Compute Yield', 'Stock: DDM', 
		'Stock: Constant G', 'Stock: Uneven G', 'CAPM', 'CAPM Extension', 'Expected Return', 'Standard Deviation', 'Coefficient of Variation', 'NPV', 'IRR', 'IOS v. MCC', 'WACC'];
	question.CallValue = ['r', 'n', 'fv', 'pv', 'null', 'annuity', 'fixedP', 'ear', 'coupon', 'couponExp', 'floatCost', 'yieldQ', 'DDM', 'constG', 'unevenG',
		'CAPM', 'CAPM2', 'rHat', 'sDev', 'CV', 'NPV', 'IRR', 'IOS', 'WACC'];
	question.Section = [4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 3, 3, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 11, 11];
	var section = {};
	section.Num = [3, 4, 5, 6, 7, 8, 9, 11];
	section.Title = ["Ch 3: Markets and Institutions", "Ch 4: Time Value of Money", "Ch 5: Interest Rates",
		"Ch 6: Bond Valuation", "Ch 7: Stock Valuation", "Ch 8: Risk and Rates of Return", "Ch 9: Capital Budgeting", "Ch 11: Cost of Capital"];

	var quiz = function () {

		var quizScore = 0;
		$("main .listing").append("Please select sections for quiz" + "<br><br>");
		$("main .content").append("This tab provides quizzes with 10 questions so you can self test. <br> " +
			"<br> You may select as many sections as you like, but please be aware that there may not be content for each chapter." +
			"<br><br> Quizzes are still in beta mode so please be patient as we get it all working appropriately");
		var k, indQ;
		for (k = 0; k < section.Title.length; k++) {
			$("main .listing").append("<input type='checkbox' value='" + section.Num[k] + "'>" + section.Title[k] + "<br>");
		}
		$("main .listing").append("<br><input type = 'button' value='Start Quiz!'><br>");

		//Create a loop that activates a section only if there is content TODO

		var quizLoop = function (qNum, quizQuestions) {
			if (qNum < quizQuestions.length) {
				questionSet(2,quizQuestions[qNum]);
				$(".qVids").append("<br><br>" +	"<input type='button' value='Next Question'>");
				$(".qVids input[value='Next Question']").on("click", function (event) {
					quizScore +=globalVar;
					qNum++;
					quizLoop(qNum, quizQuestions);
				}); 	
			} else {

		//This section is displaying the results of the quiz.	
				$("main .listing").empty();
				$("main .content").empty();
				$("main .listing").append("You scored: " + quizScore + " out of " + quizQuestions.length + " for a total of: " + (quizScore/(quizQuestions.length)*100).toFixed(2) + "%.");
				$("main .content").append("Below are the questions and your answers for your review. <br> <br>");
				for (k = 0; k < quizQuestions.length; k++) {
					$("main .content").append((k+1) + ") "	+ quizTrans.words[k] + "<br>" + 
						"You answered: " + quizTrans.submit[k] + "<br>" + 
						"Correct answer: " + quizTrans.correct[k] + "<br><br>");
				}

				//Furthermore, call the videos on incorrect questions.
			}
			
		};

		//So getting the values into the array, but doesn't click off.
		//BUT, works fine as long as they only click one time.  We will go from here and fix this later
		var quizSecArray = [];
		$("main .listing input[value='3']").on("click", function (event) {
			quizSecArray.push(3);
		});
		$("main .listing input[value='4']").on("click", function (event) {
			quizSecArray.push(4);
		});
		$("main .listing input[value='5']").on("click", function (event) {
			quizSecArray.push(5);
		});
		$("main .listing input[value='6']").on("click", function (event) {
			quizSecArray.push(6);
		});
		$("main .listing input[value='7']").on("click", function (event) {
			quizSecArray.push(7);
		});
		$("main .listing input[value='8']").on("click", function (event) {
			quizSecArray.push(8);
		});
		$("main .listing input[value='9']").on("click", function (event) {
			quizSecArray.push(9);
		});
		/* loop to remove multiple check box clicks
		//need to think it through a little bit more
		//only want a single observation, and want unclicks, unclicks are still registered
		var quizSecArrayRed = [];
		for (k=0; k< quizSecArray.length; k++) {

		}
		*/
		$("main .listing input[value='Start Quiz!']").on("click", function (event) {
			$("main .listing").empty();
			$("main .listing").append("You will be quizzed on chapters: " + quizSecArray);
			$("main .content").empty();
			$("main .content").append("instructions for the user go here");

			var quizQuestions = [];
			var totalQs = 10;		//this can be changed to an input variable
			var j, randSec, first, last, randQuest;
			for (j = 0; j < totalQs; j++) {			//used to get the "right" questions randomized
				randSec = quizSecArray[Math.floor(Math.random() * (quizSecArray.length))];
				first = question.Section.indexOf(randSec);
				last = question.Section.lastIndexOf(randSec);
				randQuest = Math.floor(Math.random() * (last + 1 - first) + first); 
				quizQuestions[j] = question.CallValue[randQuest];
			}

			quizLoop(0, quizQuestions);
		});
	};


	//
	//
	//
	//
	// Below is the established code that currently works really well, but could be improved for efficiency
	var questionSet = function (tab, quizQ) {
		
		var solveTVM = function (n, r, PV, FV) { 
		//enter 'X' for missing value, r in percentage

			if (n === 'X') {
				var nA = Math.log(FV / PV) / Math.log(1 + (r/100)).toFixed(2);
				return nA;
			}
			else if (r === 'X') {
				var rA = ((Math.pow((FV / PV), (1/n)) - 1) * 100).toFixed(2);
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

		var solveAnnuity = function (n, r, PV, PMT) {
		//enter 'X' for missing value
			if (PV === 'X') {
				var discount = Math.pow((1 + (r/100)),n);
				var PVa = (PMT * ((1 - (1/ (discount) )) / (r/100))).toFixed(2);
				return PVa;
			}
			else {
				window.alert("Not currently supported");
			}
		};

		var addAnswerFromInput = function (correct, questionType, quiz) {  
			var answer;
			//checking to see if a value is entered
			if ($(".answer-input input").val() !== "") {
				answer = $(".answer-input input").val();
				quizTrans.submit.push(answer);
				$(".answer-input").empty();
				
				$(".question-results").append("<br>" + "You answered: " + answer + "<br>");
				$(".question-results").append("The correct answer is: " + correct);
				if (quiz === 0) {
					if (answer == correct) {
						window.alert("CORRECT!!!");
					}
					else {
						window.alert("Sorry, try again");
						qVids(questionType);
					}
				} else if (quiz === 1) {
					if (answer == correct) {
						globalVar = 1; 
					} else {
						globalVar = 0;
					}
				} 
			}
		};	

		var correctAnswer = function (question) { 
			//returns the correct answer for a particular problem
			$(".question-words").empty();

			//Defining variables for DRY
			var qWords, correct;

			//Defining some repetitive variables;
			var randQ, v, holder;
			var holderArray = [];

			//There has to be a better way to write this.
			//I'm cutting and pasting the button name, click handler, the random array and the answer checker.
			switch (question) {
				case "r":
					holderArray = qSolveR();
					break;
				case "n":
					holderArray = qSolveN();
					break;
				case "fv":
					holderArray = qSolveFV();
					break;
				case "pv":
					holderArray = qSolvePV();
					break;
				case "fixedP":
					holderArray = qSolveFixedP();
					break;
				case "annuity":
					holderArray = qSolveAnnuity();
					break;
				case "ear":
					holderArray = qEar1();
					break;					
				case "coupon":
					randQ = Math.floor((Math.random() * 3));
					v = ['a', 'b', 'c'];
					switch	(v[randQ]) {
						case "a":
							holderArray = qCouponBond1();
							break;
						case "b":
							holderArray = qCouponBond2();
							break;
						case "c":
							holderArray = qCouponBond3();						
							break;
					}
					break;
				case "couponExp":
					holderArray = qCouponExp();
					break;
				case "floatCost":
					randQ = Math.floor((Math.random() * 3));
					v = ['a', 'b', 'c'];
					switch	(v[randQ]) {
						case "a":
							holderArray = qFloat1();
							break;
						case "b":
							holderArray = qFloat2();
							break;
						case "c":
							holderArray = qFloat3();
							break;
					}
					break;
				case "yieldQ":
				//I need to create a yield that generates negative values.
					randQ = Math.floor(Math.random() * 4);
					v = ['a', 'b', 'c', 'd'];
					switch	(v[randQ]) {
						case "a":
							holderArray = qYieldQ1();
							break;
						case "b":
							holderArray = qYieldQ2();
							break;
						case "c":
							holderArray = qYieldQ3();
							break;
						case "d":
							holderArray = qYieldQ4();
							break;					
					}
					break;
				case "DDM":
					holderArray = qDDM1();
					break;
					//put a realistic dividend amount in there
				case "constG":
					v = ['a', 'b', 'c'];
					randQ = Math.floor((Math.random() * v.length));
					switch	(v[randQ]) {
						case 'a':
							holderArray = qConstG1();
							break;
						case 'b':
							holderArray = qConstG2();
							break;
						case 'c':
							holderArray = qConstG3();
							break;
					}
					break;
				case "unevenG":
					holderArray = qUnevenGrowth();
					break;
				case "CAPM":
					holderArray = qCAPM1();
					break;
				case "CAPM2":
					holderArray = qCAPM2();
					break;
				case "rHat":
					holderArray = qrHat();
					break;
				case "sDev":
					holderArray = qStdDev();
					break;
				case "CV":
					holderArray = qCoefVar();
					break;
				case "NPV":
					holderArray = qNPV();
					break;
				case "IRR":
					holderArray = qIRR();
					break;
				case "IOS":
					holderArray = qIOS();
					break;
				case "WACC":
					v = ['a', 'b'];
					randQ = Math.floor((Math.random() * v.length));
					switch	(v[randQ]) {
						case 'a':
							holderArray = qWACC1();
							break;
						case 'b':
							holderArray = qWACC2();
							break;
					}
					break;
				default:
					window.alert("error on the correctAnswer() switch");
			}
			qWords = holderArray[1];
			correct = holderArray[0];
			$(".question-words").append(qWords);
			quizTrans.words.push(qWords);
			quizTrans.correct.push(correct);
			return correct;
		};

		var provideFeedback = function (question, quiz) { //enter specific question values, also checks if part of quiz

			var correct = correctAnswer(question);
			$(".question-results").empty();
			$(".answer-input").empty();
			$(".qVids").empty();
			$(".answer-input").append("<p>Write your answer:</p><input type='text'><button>enter</button>");
			if (quiz === 1) {
				$(".answer-input button").on("click", function (event) {
					addAnswerFromInput(correct, question, 1);
				});
				$(".answer-input input").on("keypress", function (event) {
					if (event.keyCode ===13) {
						addAnswerFromInput(correct, question, 1);
						
					}
				});
			} else {				
				$(".answer-input button").on("click", function (event) {
					addAnswerFromInput(correct, question, quiz);
				});
				$(".answer-input input").on("keypress", function (event) {
					if (event.keyCode ===13) {
						addAnswerFromInput(correct, question, quiz);
					}
				});
			}
		};

		if (tab === 1) {
			var i;
			for (i=0; i < question.Name.length; i++) {
				$("main .listing").append("<input type='button' value='" + question.Name[i] + "'><br>");
			}
			
			$("main .content").empty();
			$("main .content").append("<section class='question-words'> Please select a question from the left. </section>" +
					"<section class='answer-input'>  </section>" +
					"<section class='question-results'>  </section> " +
					"<section class='qVids'> </section>");

			//really should place these 'values' in an array that can be called, especially since there will be a large number of additional questions inserted.
			$("main .listing input[value='Solve for Present Value']").on("click", function (event) {
				provideFeedback("pv",0);
			});
			$("main .listing input[value='Solve for Number of Time Periods']").on("click", function (event) {
				provideFeedback("n",0);
			});
			$("main .listing input[value='Solve for Discount Rate']").on("click", function (event) {
				provideFeedback("r",0);
			});
			$("main .listing input[value='Solve for Future Value']").on("click", function (event) {
				provideFeedback("fv",0);
			});
			$("main .listing input[value='Random Present Value']").on("click", function (event) {
				var randQ = Math.floor((Math.random() * 4));
				var v = ['pv', 'n', 'r','fv'];
				provideFeedback(v[randQ],0);
			});
			$("main .listing input[value='PV of Fixed Payments']").on("click", function (event) {
				provideFeedback("fixedP",0);
			});
			$("main .listing input[value='Basic Annuity']").on("click", function (event) {
				provideFeedback("annuity",0);
			});
			$("main .listing input[value='Effective Annual Rate']").on("click", function (event) {
				provideFeedback("ear",0);
			});
			$("main .listing input[value='Coupon Bond']").on("click", function (event) {
				provideFeedback("coupon",0);
			});
			$("main .listing input[value='Bonds Expanded']").on("click", function (event) {
				provideFeedback("couponExp",0);
			});
			$("main .listing input[value='Floatation Costs']").on("click", function (event) {
				provideFeedback("floatCost",0);
			});
			$("main .listing input[value='Compute Yield']").on("click", function (event) {
				provideFeedback("yieldQ",0);
			});
			$("main .listing input[value='Stock: DDM']").on("click", function (event) {
				provideFeedback("DDM",0);
			});
			$("main .listing input[value='Stock: Constant G']").on("click", function (event) {
				provideFeedback("constG",0);
			});
			$("main .listing input[value='Stock: Uneven G']").on("click", function (event) {
				provideFeedback("unevenG",0);
			});
			$("main .listing input[value='CAPM']").on("click", function (event) {
				provideFeedback("CAPM",0);
			});
			$("main .listing input[value='CAPM Extension']").on("click", function (event) {
				provideFeedback("CAPM2",0);
			});
			$("main .listing input[value='Expected Return']").on("click", function (event) {
				provideFeedback("rHat",0);
			});					
			$("main .listing input[value='Standard Deviation']").on("click", function (event) {
				provideFeedback("sDev",0);
			});
			$("main .listing input[value='Coefficient of Variation']").on("click", function (event) {
				provideFeedback("CV",0);
			});	
			$("main .listing input[value='NPV']").on("click", function (event) {
				provideFeedback("NPV",0);
			});	
			$("main .listing input[value='IRR']").on("click", function (event) {
				provideFeedback("IRR",0);
			});	
			$("main .listing input[value='IOS v. MCC']").on("click", function (event) {
				provideFeedback("IOS",0);
			});	
			$("main .listing input[value='WACC']").on("click", function (event) {
				provideFeedback("WACC",0);
			});	
		} else if (tab === 2) {
			$("main .content").empty();
			$("main .content").append("<section class='question-words'> Please select a question from the left. </section>" +
				"<section class='answer-input'>  </section>" +
				"<section class='question-results'>  </section> " +
				"<section class='qVids'> </section>");
			return provideFeedback(quizQ, 1);

		} else {
			window.alert("error");
		}
	};



	//
	//
	//
	//Start of section on question videos

	var qVids = function (questionType) {
		
		var qVidAppend = function (index) {
			$("main .content").empty();	
			$("main .listing").empty();
			$("main .listing").append("<button>Click if Done Watching</button> <br>");
			//If another video on this question, append additional buttons
			//"<input type='button' value='" + question.Name[i] + "'>

			$("main .content").append("<div class = 'content'> <iframe width='720' height='500' src=' https://www.youtube.com/embed/" +
				qVidArray.link[index] + 
				"?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe> " + 
				"You are watching: " + qVidArray.title[index] + "</div>");		
			
			$("main .listing button").on("click", function (event) { //clears us out of the video
				$("main .listing").empty();
				questionSet();
			});
		};

		//video array to handle the videos
		//I really need to get this into an external format so I dont have to hard code it all
		var qVidArray = {};
		qVidArray.type = ["ear", "r", "yieldQ", "compound", "unevenCF", "annuity", "fixedP", "coupon","couponExp"];
		qVidArray.title = ["EAR","Simple Compound", "Computing Yield", "Quarterly Compounding", "Present Value of Uneven Cash Flows", "4 Year Annuity", "Fixed Payments", "Valuing Coupon Bonds - 1", "Valuing Coupon Bonds - 2"];
		qVidArray.link = ["6J0vibQ2o9Y", "Y7OZiYO2eSs", "mQZ3zaiwjIw", "nAsp2YQX_cE", "D68cQxjnZDM", "jIqIRZGjk0U", "6UmuuEEzKxM", "q_N280nbXpc", "19gD7pZLDUA"];

		//Should really move the buttons over to "listing" so that I can link lectures up to the questions and the student can select what is appropriate
		var a = qVidArray.type.indexOf(questionType);
		if (a != -1) {
			//$("main .content").append("<section class=qVids></section>");
			$(".qVids").append("<br><br>" +
				"<p>Need some more help?</p> <p> There is a video on a similar problem: " +
				"<input type='button' value='Click for Video'>");
			$("main .content input[value='Click for Video']").on("click", function (event) {
				qVidAppend(a);
			});
		}
		




					//append button "does this help"
						//if "yes"
							//"thank you, please select another question"
						//if "no, I want another video"
							// restart function
								// But need to figure out how to handle that second video. Maybe skip for the time being.
	};
