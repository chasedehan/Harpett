//Question Functions for Finance-Investments


		//There is a bunch of overlap with the BusFinance and Stats portion, but going through the CFA and writing some questions

var femaleName = function() {
	var holder = ['Karie', 'Sabrina', 'Harper', 'Bennett', 'Elleve', 'Thora', 'Frannie', 'Wilma', 'Virginia', 'Dawn', 'Elizabeth', 'Marie'];
	return holder[Math.floor(Math.random() * (holder.length))];
};
var maleName = function() {
	var holder = ['Chase', 'Nick', 'Gilbert', 'George', 'Atticus', 'Ansel', 'Oliver', 'Lloyd', 'Maurice', 'Raynor', 'Joseph', 'Karl', 'John Maynard', 'Andy'];
	return holder[Math.floor(Math.random() * (holder.length))];
};
var surName = function() {
	var holder = ['Warfield', 'Hiteshew', 'Allison', 'Kasper', 'DeHan', 'Vienneau', 'Mikeska', 'Schumpeter', 'Keynes', 'Marx', 'Polanyi', 'Adams', 'Warhol'];
	return holder[Math.floor(Math.random() * (holder.length))];
};
var compName = function() {
	var holder = ['BMW', 'Apple Computers', 'Microsoft', 'Facebook', 'ABC Inc.', 'BAMEB Motorcycles', 'Tofrandi Naturals', 'RentBooks.com', 'DeNeau Enterprises', 'Parker Sled Manufacturing'];
	return holder[Math.floor(Math.random() * (holder.length))];
};
var bankName = function() {
	var holder = ['Prosperity Bank', 'Mountain America Credit Union', 'Wells Fargo', 'Palmetto Bank', 'Bank of America', 'Chase Bank', 'Simple Bank', 'Moven Bank'];
	return holder[Math.floor(Math.random() * (holder.length))];
};
var invBankName = function() {
	var holder = ['J.P. Morgan', 'Goldman Sachs', 'Merrill Lynch', 'Morgan Stanley', 'Citigroup', 'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse'];
	return holder[Math.floor(Math.random() * (holder.length))];
};



var qSharpe1 = function() {
	//arithmetic mean
	var obsArray = [],
		Rp = Math.floor((Math.random()*12) + 3),
		RF = 0.35 * Rp,
		sd = ((Math.random()*10) + 3).toFixed(2),
		correct = ((Rp - RF) / sd).toFixed(1),
		qWords = "What is the Sharpe Ratio of an investment given a risk free rate of " + RF + "%, and a return of " + Rp +
			"with a standard deviation of " + sd + "%? (Enter rounded to 1 decimal place)";
		valuePass = [correct, qWords];
};
