//MicroEconomics questions

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

var qPerChange = function() {
	var q1 = (Math.random() * 100).toFixed(2);
	var q2 = (Math.random() * 100).toFixed(2);
	var perChange = (((q2 - q1)/q1)*100).toFixed(1);

	var qWords = "After a price change, the quantity demanded went from " + q1 + " units to " + q2 + " units. What is the percentage change? (Enter as a percentage rounded to one decimal point)";
	var valuePass = [perChange, qWords];
};