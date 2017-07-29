var main = function () {
	"use strict";
	

	$(".tabs a span").toArray().forEach(function (element) {
		$(element).on("click", function () {
			var $element = $(element),
				$content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .listing").empty();
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				$("main .listing").append("<p> Welcome, we have so much to show you. </p>" +
					"<br><p> And even more is coming!</p>");
			} else if ($element.parent().is(":nth-child(2)")) {
				questionSet(1,0);
			} else if ($element.parent().is(":nth-child(3)")) {
				videoEmbed();
			} else if ($element.parent().is(":nth-child(4)")) {
				quiz();
				//$("main .content").append("We are still working on this portion, it should be up shortly");
			}
			return false;
		});
	});


//
//
// Section on Video Links
	
	//defining the variable for inserting the embedded videos.
	//I plan on converting all these to a JSON file once I am communicating with the server.
	//Then, I won't have to come in and hardcode the links
	var videoArray = {};
	videoArray.title = ["Annuities with Financial Calculator", "Risk Premium 1", "Risk Premium 2", "Stocks v Bonds", "Discount Bond", "Coupon Bond Basics","Intro to Bond Calculations",
		"Bonds: Coupon v. Market Rate", "Bonds: Convert to Semiannual"];
	videoArray.link = ["f5FqVQ83S1g", "ptOmSnf-aFo", "PpFdZioq_1g", "j8ecBRydUVc", "astmfaQZLkU", "dNY_iGemOf4", "VD4j0rZiRUw", "GK5HkfAFVns", "swEIryPr4-A"];


	var videoAppend = function (index) {
		$("main .content").empty();		
		$("main .content").append("<div class = 'content'> <iframe width='720' height='500' src=' https://www.youtube.com/embed/" +
			videoArray.link[index] + 
			"?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe> " + 
			"You are watching: " + videoArray.title[index] + "</div>");		
	};

	var videoEmbed = function () {
		//insert a for loop so I dont have to copy/paste each of these input types
		//$("main .listing").append("<input type='button' value='" + videoArray.title[0] + "'><br>");
		var index;
		for (index = 0; index < videoArray.title.length; index += 1){
			$("main .listing").append("<input type='button' value='" + videoArray.title[index] + "'><br>");
		}
		$("main .content").append("<p> Please select a video from the left. </p>");
		$("main .content").append("<p><br>Unfortunately, since we are in beta mode all videos cannot be embedded into the webpage at this time.  Please visit our YouTube channel for more videos: <br></p>");
		$("main .content").append("<a href='https://www.youtube.com/channel/UCtXGgjzGMVSxjwwmHL3eqiA' target = '_blank'>Take me to YouTube!</a>");

		$("main .listing input[value='Annuities with Financial Calculator']").on("click", function (event) {
			videoAppend(0);
		});
		$("main .listing input[value='Risk Premium 1']").on("click", function (event) {
			videoAppend(1);
		});
		$("main .listing input[value='Risk Premium 2']").on("click", function (event) {
			videoAppend(2);
		});
		$("main .listing input[value='Stocks v Bonds']").on("click", function (event) {
			videoAppend(3);
		});
		$("main .listing input[value='Discount Bond']").on("click", function (event) {
			videoAppend(4);
		});
		$("main .listing input[value='Coupon Bond Basics']").on("click", function (event) {
			videoAppend(5);
		});
		$("main .listing input[value='Intro to Bond Calculations']").on("click", function (event) {
			videoAppend(6);
		});
		$("main .listing input[value='Bonds: Coupon v. Market Rate']").on("click", function (event) {
			videoAppend(7);
		});
		$("main .listing input[value='Bonds: Convert to Semiannual']").on("click", function (event) {
			videoAppend(8);
		});
		


	};
};
$(document).ready(main);