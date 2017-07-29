 var main = function() {
	var questionSet = function () {
	/*		var question = [
						    {
						        "name": "TVM - Present Value",
						        "callvalue": "r",
						        "section": 4
						    },
						    {
						        "name": "TVM - Num Periods",
						        "callvalue": "n",
						        "section": 4
						    },

						]
			console.log(question.callvalue);*/
		var question = {};
		question.Name = ['TVM - Present Value', 'TVM - Num Periods', 'TVM - Discount Rate', 'TVM - Future Value', 'PV of Fixed Payments', 'Basic Annuity', 'Effective Annual Rate', 'Coupon Bond', 'Bonds Expanded', 'Floatation Costs', 'Compute Yield', 'Stock: DDM', 
			'Stock: Constant G', 'Stock: Uneven G', 'CAPM', 'CAPM Extension', 'Expected Return', 'Standard Deviation', 'Coefficient of Variation', 'NPV', 'IRR', 'IOS v. MCC', 'WACC'];
		question.CallValue = ['r', 'n', 'fv', 'pv', 'annuity', 'fixedP', 'ear', 'coupon', 'couponExp', 'floatCost', 'yieldQ', 'DDM', 'constG', 'unevenG',
			'CAPM', 'CAPM2', 'rHat', 'sDev', 'CV', 'NPV', 'IRR', 'IOS', 'WACC'];
		question.Section = [4, 4, 4, 4, 4, 4, 5, 6, 6, 3, 3, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 11, 11]; 

		var section = {};
		section.Num = [3, 4, 5, 6, 7, 8, 9, 11];
		section.Title = ["Ch 3: Markets and Institutions", "Ch 4: Time Value of Money", "Ch 5: Interest Rates",
			"Ch 6: Bond Valuation", "Ch 7: Stock Valuation", "Ch 8: Risk and Rates of Return", "Ch 9: Capital Budgeting", "Ch 11: Cost of Capital"];
		var addAnswerFromInput = function (correct, questionType, quiz) {  
			var answer;
			//checking to see if a value is entered
			if ($(".answer-input input").val() !== "") {
				answer = $(".answer-input input").val();
				$(".answer-input").empty();
				
				$(".question-results").append("<br>" + "You answered: " + answer + "<br>");
				$(".question-results").append("The correct answer is: " + correct);
				if (answer == correct) {
					window.alert("CORRECT!!!");
				}
				else {
					window.alert("Sorry, try again");
					qVids(questionType);
				}
			}
		};	

		var correctAnswer = function (question) { 
			//returns the correct answer for a particular problem
			$(".question-words").empty();
			//Defining variables for DRY
			var qWords, correct;

			//Defining some repetitive variables;
			var randQ, 
				v,
				holder;
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
					v = ['a', 'b', 'c'];
					randQ = Math.floor((Math.random() * v.length));
					switch	(v[randQ]) {
						case 'a':
							holderArray = qUnevenGrowth();
							break;
						case 'b':
							holderArray = qUnevenGrowth2();
							break;
						case 'c':
							holderArray = qUnevenGrowth3();
							break;
					}
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
			return correct;
		};

		var provideFeedback = function (question, quiz) { //enter specific question values, also checks if part of quiz

			$(".content").empty();
			$(".content").append("<section class='question-words'> hello </section>" +
				"<section class='answer-input'>  </section>" +
				"<section class='question-results'>  </section> " +
				"<section class='qVids'> </section>");

			var correct = correctAnswer(question);
			$(".question-results").empty();
			$(".answer-input").empty();
			$(".qVids").empty();
			$(".answer-input").append("<br><p>Enter your answer:</p><input type='text'><button>submit</button>");
				
			$(".answer-input button").on("click", function (event) {
				addAnswerFromInput(correct, question, quiz);
			});
			$(".answer-input input").on("keypress", function (event) {
				if (event.keyCode ===13) {
					addAnswerFromInput(correct, question, quiz);
				}
			});
			
		};

		//Click handler is below
		//This is the functionality
		$(".sidebar").empty();

		//populating the question links
		for (i=0; i < question.Name.length; i++) {
			$(".sidebar").append("<input type='submit' class ='button link' value='" + question.Name[i] + "'>");
		}

		


		//really should place these 'values' in an array that can be called, especially since there will be a large number of additional questions inserted.
		$(".sidebar input[value='TVM - Present Value']").on("click", function (event) {
			provideFeedback("pv",0);
		});
		$(".sidebar input[value='TVM - Num Periods']").on("click", function (event) {
			provideFeedback("n",0);
		});
		$(".sidebar input[value='TVM - Discount Rate']").on("click", function (event) {
			provideFeedback("r",0);
		});
		$(".sidebar input[value='TVM - Future Value']").on("click", function (event) {
			provideFeedback("fv",0);
		});
		$(".sidebar input[value='PV of Fixed Payments']").on("click", function (event) {
			provideFeedback("fixedP",0);
		});
		$(".sidebar input[value='Basic Annuity']").on("click", function (event) {
			provideFeedback("annuity",0);
		});
		$(".sidebar input[value='Effective Annual Rate']").on("click", function (event) {
			provideFeedback("ear",0);
		});
		$(".sidebar input[value='Coupon Bond']").on("click", function (event) {
			provideFeedback("coupon",0);
		});
		$(".sidebar input[value='Bonds Expanded']").on("click", function (event) {
			provideFeedback("couponExp",0);
		});
		$(".sidebar input[value='Floatation Costs']").on("click", function (event) {
			provideFeedback("floatCost",0);
		});
		$(".sidebar input[value='Compute Yield']").on("click", function (event) {
			provideFeedback("yieldQ",0);
		});
		$(".sidebar input[value='Stock: DDM']").on("click", function (event) {
			provideFeedback("DDM",0);
		});
		$(".sidebar input[value='Stock: Constant G']").on("click", function (event) {
			provideFeedback("constG",0);
		});
		$(".sidebar input[value='Stock: Uneven G']").on("click", function (event) {
			provideFeedback("unevenG",0);
		});
		$(".sidebar input[value='CAPM']").on("click", function (event) {
			provideFeedback("CAPM",0);
		});
		$(".sidebar input[value='CAPM Extension']").on("click", function (event) {
			provideFeedback("CAPM2",0);
		});
		$(".sidebar input[value='Expected Return']").on("click", function (event) {
			provideFeedback("rHat",0);
		});					
		$(".sidebar input[value='Standard Deviation']").on("click", function (event) {
			provideFeedback("sDev",0);
		});
		$(".sidebar input[value='Coefficient of Variation']").on("click", function (event) {
			provideFeedback("CV",0);
		});	
		$(".sidebar input[value='NPV']").on("click", function (event) {
			provideFeedback("NPV",0);
		});	
		$(".sidebar input[value='IRR']").on("click", function (event) {
			provideFeedback("IRR",0);
		});	
		$(".sidebar input[value='IOS v. MCC']").on("click", function (event) {
			provideFeedback("IOS",0);
		});	
		$(".sidebar input[value='WACC']").on("click", function (event) {
			provideFeedback("WACC",0);
		});	

	};


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
	questionSet();
};
$(document).ready(main); 