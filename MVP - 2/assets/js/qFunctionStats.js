//Statistics Questions

		//math.js needs to be installed; I need to make sure that it works through all browsers. 
		//Otherwise, I might need to change some code around to make it work and I don't want to.

//At this phase, I am doing the mathematical backbone with plain vanilla wording in questions.
//Once I know that the questions are working correctly, I can add some additional problems with more difficult wording.


//Starts with values such as names to be called in each question
//Then, helper functions
//Then, the questions

	//
	//Fluff inserted
	//
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

	//
	//Helper Functions
	//
function factorial(n) {
	//Computes a factorial using recursion
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

	//
	//Algorithmic Questions
	//

//Descriptive Statistics
var qBasicMean1 = function() {
	//arithmetic mean
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = math.mean(obsArray);
	qWords = "Compute the mean of the following " + n + " observations: (Enter rounded to one decimal point) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qMedian1 = function() {
	//Find the median
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = math.median(obsArray);
	qWords = "What is the median of the below " + n + " observations: (Enter rounded to one decimal point) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qGeoMean1 = function() {
	//Compute the Geometric Mean
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		xProduct = 1,
		lnG = 0,
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = (Math.random()*10).toFixed(1);
		xProduct = xProduct * obsArray[i];
	}

	lnG = ( (1/n) * (Math.log(xProduct)) ).toFixed(1);
	correct = Math.log(lnG);
	qWords = "What is the geometric mean of the below " + n + " observations: (Enter rounded to one decimal point) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qRange1 = function() {
	//Find the Range
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = (Math.max(obsArray) - Math.min(obsArray)).toFixed(0);
	qWords = "What is the range of the following observations: (Enter as integer) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qStdDev1 = function() {
	//Compute the Standard Deviation
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = (math.std(obsArray)).toFixed(1);
	qWords = "What is the Standard Deviation of the below " + n + " observations: (Enter rounded to 1 decimal place) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qVariance1 = function() {
	//Compute the Standard Deviation
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = (math.var(obsArray)).toFixed(1);
	qWords = "What is the variance of the below " + n + " observations: (Enter rounded to 1 decimal place) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};

var qCoefVar1 = function() {
	//Compute the Standard Deviation
	var obsArray = [],
		n = Math.floor((Math.random()*12) + 3),
		correct = "empty",
		qWords = "empty",
		valuePass = [];
	for (var i = 0; i<n; i++) {
		obsArray[i] = Math.floor(Math.random()*10);
	}
	
	correct = (math.var(obsArray)/math.mean(obsArray)).toFixed(1);
	qWords = "What is the coefficient of variation of the below " + n + " observations: (Enter rounded to 1 decimal place) <br>" + obsArray;
	valuePass = [correct, qWords];
	return valuePass;
};


//Probability
var qExhaustive1 = function (){
	//Compute remaining probability
	var s1 = (Math.random() * 0.5).toFixed(2),
		s2 = (Math.random() * 0.5).toFixed(2),
		correct = (1-s1-s2).toFixed(2),
		qWords = "If there are three possible outcomes, with the first outcome having a probability of " + s1 + " and the second being " + s2 +
		".  What is the probability of the third event occurring? (Round to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qBasicProbability1 = function() {
	//Compute Basic Probability
	var c1 = Math.floor((Math.random()*15) + 3),
		c2 = Math.floor((Math.random()*15) + 3),
		c3 = Math.floor((Math.random()*15) + 3),
		correct = (c1 / (c1 + c2 + c3) ).toFloat(2),
		qWords = "There is a bucket with " + c1 + " yellow marbles, " + c2 + " blue marbles, and " + c3 + " green marbles. What is the probability " +
			"that you would pull out a yellow marble? (Enter as probability rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qBasicProbability2 = function() {
	//Compute Basic Probability
	var c1 = Math.floor((Math.random()*100) + 3),
		c2 = Math.floor((Math.random()*200) + 3),
		c3 = Math.floor((Math.random()*150) + 3),
		correct = ((c1+c3) / (c1 + c2 + c3) ).toFloat(2),
		qWords = "On one of your music playlists, you have " + c1 + "rap songs, " + c2 + " punk rock songs, and " + c3 + " electronica songs." +
			"What is the probability that the first song is going to be EITHER a rap OR electronica song? (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qIndProb1 = function() {
	//Computes independent Probabilities
	var s1 = Math.random().toFixed(2),
		s2 = Math.random().toFixed(2),
		correct = (s1 * (1-s2)).toFixed(2),
		qWords = "Suppose the probability of Event A occurring is " + s1 + " and Event B is " + s2 +
			". What is the probability that A occurs, but B does not? (Enter rounded to 2 decimal places)",
		valuePass = [correct,qWords];
	return valuePass;
};

var qIndProb2 = function() {
	//Computes independent Probabilities
	var s1 = Math.random().toFixed(2),
		s2 = Math.random().toFixed(2),
		correct = (s1 * s2).toFixed(2),
		qWords = "Suppose the probability of Event A occurring is " + s1 + " and Event B is " + s2 +
			". What is the probability that both A and B occur? (Enter rounded to 2 decimal places)",
		valuePass = [correct,qWords];
	return valuePass;
};

var qIndProb3 = function() {
	//Computes independent Probabilities
	var s1 = Math.random().toFixed(2),
		s2 = Math.random().toFixed(2),
		correct = ((1-s1) * (1-s2)).toFixed(2),
		qWords = "Suppose the probability of Event A occurring is " + s1 + " and Event B is " + s2 +
			". What is the probability that neither event occurs? (Enter rounded to 2 decimal places)",
		valuePass = [correct,qWords];
	return valuePass;
};

var qDepProb1 = function() {
	//Computes Dependent Probabilities
	var s1 = Math.random().toFixed(2),
		s2 = Math.random().toFixed(2),
		male = maleName(),
		female = femaleName(),
		qWords = "Two rival pirates are at sea, " + male + " and " + female + ", and are lining their cannons up at each other. If his ship has not been hit, " + male +
			" has a probability of " + s1 + " of hitting " + female + "'s ship, but if he has already been hit, he will always miss. <br> " +
			"If her ship hasn't already been hit, " + female + " has a " + s2 + "probability of hitting " + male + ", but will always miss if she has been hit first <br>"+
			"If both shoot, but " + male + " shoots first, what is the probability that he hits his rivals ship? (enter as two decimal places)",
		valuePass = [s1,qWords];
	return valuePass;
};

var qDepProb2 = function() {
	//Computes Dependent Probabilities
	var s1 = Math.random().toFixed(2),
		s2 = Math.random().toFixed(2),
		m1 = Math.random().toFixed(2),
		m2 = Math.random().toFixed(2),
		male = maleName(),
		female = femaleName(),
		correct = (s1 * m2).toFixed(2),
		qWords = "Two rival pirates are at sea, " + male + " and " + female + ", and are lining their cannons up at each other. If his ship has not been hit, " + male +
			" has a probability of " + s1 + " of hitting " + female + "'s ship, but if he has already been hit, his probability is " + m1 + ". <br> " +
			"If her ship hasn't already been hit, " + female + " has a " + s2 + "probability of hitting " + male + ", but if she has been hit, her probability is " + m2 + ".<br>"+
			"If both shoot, but " + male + " shoots first, what is the probability that " + female + " hits her rivals ship? (enter as two decimal places)";
		valuePass = [correct,qWords];
	return valuePass;
};

var qCondProb1 = function() {
	//Compute Conditional Probability
	var s1 = (Math.random() * 0.4).toFixed(2),
		s2 = (Math.random() * 0.7).toFixed(2),
		sJoint = (Math.random() * 0.7).toFixed(2),
		correct = (sJoint/s2).toFixed(2),
		qWords = "If the probability of Event A is " + s1 + " and the probability of Event B is " + s2 + ", while the probability of both events is " + sJoint +
		". What is probability of Event A occurring, given that Event B has occurred? (Enter as probability rounded to 2 decimal places)",
		valuePass = [correct, "Nothing here yet"];
	return valuePass;
};

var qJointProb1 = function() {
	//Applying the multiplication rule for Joint Probabilities
	var s1 = (Math.random() * 0.4).toFixed(2),
		s2 = (Math.random() * 0.7).toFixed(2),
		sJoint = (Math.random() * 0.7).toFixed(2),
		condProb = (sJoint/s2).toFixed(2),
		correct = sJoint,
		qWords = "The probability of Event B occuring is " + s2 + ". The probability of Event A occurring, given that Event B occurs is " + condProb +
		". What is the joint probability of Event A and Event B? (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;

};


var qStatComb1 = function() {
	//Calculate Combinations with the Binomial Formula
	var n = Math.floor((Math.random()*20)+1),
		r = Math.floor((Math.random()*3)+2),
		male = maleName(),
		correct = (factorial(n) / (factorial(n-r) * factorial(r)) ).toFixed(0),
		qWords = male + " has " + n + " Bruce Willis dolls (He is a big Die Hard fan) and only has room for three of them at a time on his desk. How many different combinations are there?",
		valuePass = [correct, qWords];
	return valuePass;
};

var qStatComb2 = function() {
	//Calculate Combinations with the Binomial Formula
	var n = Math.floor((Math.random()*20)+1),
		r = Math.floor((Math.random()*3)+2),
		female = femaleName(),
		correct = (factorial(n) / (factorial(n-r) * factorial(r)) ).toFixed(0),
		qWords = female + " is offering to be a designated driver, but her car is not large enough to carry all " + n + " of her friends, since she only has seats for " + r +
			"people.  None of the friends care where they sit in the car.  How many different combinations of friends can " + female + "carry?",
		valuePass = [correct, qWords];
	return valuePass;
};

var qPermutation1 = function() {
	//Calculate Combinations with the Binomial Formula
	var n = Math.floor((Math.random()*20)+1),
		r = Math.floor((Math.random()*3)+2),
		correct = (factorial(n) / (factorial(n-r)) ).toFixed(0),
		qWords = compName() + " is offering " + r + "awards, in which there is a descending amount of prize money. " + n + " people applied for these awards. How many permuations are possible?",
		valuePass = [correct, qWords];
	return valuePass;
};


//covariance

//correlation

//Bayes applications






	//Sampling and Estimations Section
//
//
var qStdError1 = function() {
	//Compute Sample Standard Error
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		correct = s / (Math.sqrt(n)),
		qWords = "What is the standard error of the sample mean, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "?(Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};


var qConfInt1 = function() {
	//Computing 95% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 1.96,
		correct = (mean + (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the upper bound of a 95% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qConfInt2 = function() {
	//Computing 95% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 1.96,
		correct = (mean - (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the lower bound of a 95% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qConfInt3 = function() {
	//Computing 99% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 2.58,
		correct = (mean + (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the upper bound of a 99% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qConfInt4 = function() {
	//Computing 99% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 2.58,
		correct = (mean - (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the lower bound of a 99% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qConfInt5 = function() {
	//Computing 90% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 1.65,
		correct = (mean + (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the upper bound of a 90% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};

var qConfInt6 = function() {
	//Computing 90% confidence Interval
	var mean = (Math.random() * 50).toFixed(0),
		n = Math.floor((Math.random() * 100)+30),
		s = (Math.random() * 15).toFixed(2),
		z = 1.65,
		correct = (mean - (z*s)/(Math.sqrt(n)) ).toFixed(2),
		qWords = "What is the lower bound of a 90% confidence interval, given " + n + " observations, a sample mean of " + mean + " and the sample standard deviation of " + s + "? <br>" +
			"The 90% Z = 1.65, 95% z = 1.96, 99% z = 2.58 (Enter rounded to 2 decimal places)",
		valuePass = [correct, qWords];
	return valuePass;
};








var qExpReturn1 = function() {
	//Compute expected Value
	var s1 = (Math.random() * 0.5).toFixed(2);
	var s2 = (Math.random() * 0.5).toFixed(2);
	var s3 = (1-s1-s2).toFixed(2);
	var r1 = ((Math.random() * 50) - 15).toFixed(0); //all returns in % format
	var r2 = ((Math.random() * 50) - 15).toFixed(0);
	var r3 = ((Math.random() * 50) - 15).toFixed(0);
	var rHat = (s1*r1 + s2*r2 + s3*r3).toFixed(2);

	var qWords = "What is the expected return on an investment given the following:" +
		"<br> outcome 1 probability: " + s1 + "    return: " + r1 + "%" + 
		"<br> outcome 2 probability: " + s2 + "    return: " + r2 + "%" + 
		"<br> outcome 3 probability: " + s3 + "    return: " + r3 + "%" + 
		"<br>(enter rounded to 2 decimal places)";
	var valuePass = [rHat, qWords];
	return(valuePass);
};





var qPerChange = function() {
	//Compute Percent Change
	var q1 = (Math.random() * 100).toFixed(2);
	var q2 = (Math.random() * 100).toFixed(2);
	var perChange = (((q2 - q1)/q1)*100).toFixed(1);

	var qWords = "After a price change, the quantity demanded went from " + q1 + " units to " + q2 + " units. What is the percentage change? (Enter as a percentage rounded to one decimal point)";
	var valuePass = [perChange, qWords];
	return valuePass;
};