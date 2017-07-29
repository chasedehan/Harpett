//js file for videos page.

var main = function() {

	$(".sidebar").empty();
	$(".sidebar").append("<header><h3>Video Section Selection</h3></header>")

	
	var videos = {};
	videos.sectionNum = []
	videos.section = ["Time Value of Money", "Raising Capital", "Financial Statements", "Bond Valuation", "Stock Valuation", "Risk and Return", "Capital Budgeting", "Cost of Capital"];
	videos.address = ["https://www.youtube.com/playlist?list=PLulAsAWm1FjHnj19m4stnZCEDuq88gAW6", "https://www.youtube.com/playlist?list=PLulAsAWm1FjEepCmisVgCPKayeOnjXM2u", 
		"https://www.youtube.com/playlist?list=PLulAsAWm1FjGnzFctdgBLSZMsyAX9V-OT", "https://www.youtube.com/playlist?list=PLulAsAWm1FjHtUnqIje_Fxf2u-TH8HN3G", 
		"https://www.youtube.com/playlist?list=PLulAsAWm1FjFxezoz3Muj7m34etGjyZZO", "https://www.youtube.com/playlist?list=PLulAsAWm1FjH-ZafgpckywfYRK5lhXTPE",
		"https://www.youtube.com/playlist?list=PLulAsAWm1FjG1OWv0fQmLK4e1m1O49dFt", "https://www.youtube.com/playlist?list=PLulAsAWm1FjE3yHne95YFpWrZXX47Ik6v"];
//assign objects with title and link
	for (i=0; i < videos.section.length; i++) {
		$(".sidebar").append("<a href=" + videos.address[i] + " target='_blank' class = 'button'>" + videos.section[i] + "</a>");

	}
//for loop inserting buttons with title
//links to external site

};
$(document).ready(main); 