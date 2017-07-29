//Business Finance Questions
/*this javascript file contains the functions for the algorithmic questions.  

Eventually this list will be huge and have to be indexed according to question names

The old var names are at the bottom of this file
*/


//Random name values to be called into the below question functions
	//ideally these should all be pulled in from a larger function - maybe a spreadsheet?
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



//Beginning of question functions

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

var sTVM = function (n, r, PV, FV) { 
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

//Computes the NPV of a stream of payments received for up to 6 years
var qNPV = function(){
	var a; 
	var holdSum = 0;
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 6) + 1);
	var CF = [0,0,0,0,0,0,0];
	for (var i=1; i <= n; i++){
		a = Math.floor((Math.random()*999) + 1);
		holdSum += a;
		CF[i] = a;
	}
	CF[0] = (-1 * (holdSum * (1 + (Math.random() - 0.5)))).toFixed(2);
	var NPV = parseFloat(CF[0]);
	for ( var i=1; i<=6; i++){
		a=parseFloat(sTVM(i, r, 'X', CF[i]));
		NPV += a;
	}
	NPV = NPV.toFixed(2);
	var qWords = 'You are evaluating a project that will cost $' + -1 * CF[0] + " at inception, and <br> $" + CF[1] + " in 1 year <br> $" + CF[2] + " in 2 years <br> $" +
		CF[3] + " in 3 years <br> $" + CF[4] + " in 4 years <br> $" + CF[5] + " in 5 years, and <br> $" + CF[6] + " in 6 years. <br> If your required return is " + r + 
		"%, what is the NPV? (round to 2 decimal places)";
	var valuePass = [NPV, qWords];
	return valuePass;
};

var qIRR = function(){
	var a; 
	var holdSum = 0;
	var r = parseFloat((Math.random() * 30) + 1).toFixed(1);
	var n = Math.floor((Math.random() * 6) + 1);
	var CF = [0,0,0,0,0,0,0];
	for (var i=1; i <= n; i++){
		a = Math.floor((Math.random()*999) + 1);
		holdSum += a;
		CF[i] = a;
	}
	var hold = 0;
	for (var i=1; i<=6; i++){
		hold+=parseFloat(sTVM(i, r, 'X', CF[i]));
	}
	CF[0] = (-1 * hold).toFixed(2);
	var qWords = 'You are evaluating a project that will cost $' + -1 * CF[0] + " at inception, and <br> $" + CF[1] + " in 1 year <br> $" + CF[2] + " in 2 years <br> $" +
		CF[3] + " in 3 years <br> $" + CF[4] + " in 4 years <br> $" + CF[5] + " in 5 years, and <br> $" + CF[6] + " in 6 years. <br> What is the IRR? (round to 1 decimal point)";
	var valuePass = [r, qWords];
	return valuePass;
};

var qIOS = function(){

	var IOSret = [];
	var IOSamount = [];
	var MCCcost = [];
	var MCCamount = [];
	var n = Math.floor((Math.random() * 6) + 1);
	for(var i=0; i<n; i++){
		IOSret[i] = Math.floor((Math.random() * 30) + 1);
		IOSamount[i] = Math.floor((Math.random()*99) + 1)*10;
	}
	var n2 = Math.floor((Math.random() * 5) + 2);	
	for(var i=0; i<n2; i++){
		MCCcost[i] = Math.floor((Math.random() * 20) + 1);
		MCCamount[i] = Math.floor((Math.random()*99) + 1)*10;
	}

	MCCcost.sort(function sortNumber(a,b){return a-b;});
	IOSret.sort(function sortReverse(a,b){return b-a;});

	var qWords = "You, the CFO, are evaluating the following projects and determining if they should be funded:";
	for(var i=0; i<n; i++){
		qWords += "<br>Project" + (i+1) + " = " + IOSret[i] + "%, for a cost of $" + IOSamount[i];
	}
	qWords += "<br><br> The marginal costs of capital are as follows:";
	for(i=0; i<n2; i++){
		qWords += "<br>WACC = " + MCCcost[i] + "%, for $" + MCCamount[i] + " of funding.";
	}

	qWords += "<br>How much in total $ should you fund?";
	qWords += "<br><br>SORRY, THIS IS PRINTING GARBAGE ANSWERS RIGHT NOW, HOPEFULLY IT WILL BE WORKING SOON! ";

	var totalFunded = 0;
	var resFunding = MCCamount[0];
	console.log(MCCcost);
	if(IOSret[0] > MCCcost[0]){
		for(var i=0; i < MCCcost.length; i++){
			for(var j=0; j < IOSret.length; j++){
				if(IOSret[j] <= MCCcost[i]){
					//insert a for loop to keep inside as we go through? or what?
					//Its not picking up partial funding.
					if(IOSamount[j] <= resFunding){
						totalFunded += IOSamount[j];
						resFunding -= IOSamount[j];
					}else{
						resFunding += MCCamount[i+1];
					}
				}
			}
		}
	}else{totalFunded=0;}
	var valuePass = [totalFunded, qWords];
	return(valuePass);
};

var qWACC1 = function(){
	var rD = ((Math.random()*5)+2).toFixed(2)/1;
	var tRate = (Math.random()/2).toFixed(2)/1;
	var rDT = rD * (1 - tRate);
	var rPS = (rD + (Math.random()*5)).toFixed(2)/1;
	console.log(rD+rPS);
	var rCS = (rPS + (Math.random()*5)).toFixed(2);
	var wDT = (Math.random()*0.8).toFixed(2);
	var wPS = (Math.random()*0.2).toFixed(2);
	var wCS = (1 - wDT - wPS).toFixed(2);
	var WACC = ((wDT*rDT) + (wPS*rPS) + (wCS*rCS)).toFixed(1);
	var assets = Math.random()*950;

	var qWords = "Your company is paying " + rD + "% on their bonds outstanding, " + rPS + "% on their preferred stock, and stock holders requiring " + rCS +
		"%.  Your effective tax rate is " + tRate + ". Of your capital structure, " + wDT + " is in debt, " + wPS + " is preferred, and " + wCS + " is in common stock." +
		"What is your WACC? (enter as percentage)";
	var valuePass = [WACC, qWords];
	return valuePass;
};

var qWACC2 = function(){
	var rD = ((Math.random()*5)+2).toFixed(2)/1,
		tRate = (Math.random()/2).toFixed(2)/1,
		rDT = rD * (1 - tRate),
		rPS = (rD + (Math.random()*5)).toFixed(2)/1,
		rCS = (rPS + (Math.random()*5)).toFixed(2),
		wDT = (Math.random()*0.8).toFixed(2),
		wPS = (Math.random()*0.2).toFixed(2),
		wCS = (1 - wDT - wPS).toFixed(2),
		WACC = ((wDT*rDT) + (wPS*rPS) + (wCS*rCS)).toFixed(1),
		assets = Math.random()*950;

	var qWords = "Your company is paying " + rD + "% on their bonds outstanding, " + rPS + "% on their preferred stock, and stock holders requiring " + rCS +
		"%.  Your effective tax rate is " + tRate + ". Of your capital structure, $" + (wDT*assets).toFixed(2) + "m of assets are funded by debt, $" + (wPS*assets).toFixed(2) + "m is preferred, and $" + 
		(wCS*assets).toFixed(2) + "m is in common stock. What is your WACC? (enter as percentage)";
	var valuePass = [WACC, qWords];
	return valuePass;
};

var qFloat1 = function(){
	var netIssue = Math.floor((Math.random()*1000) + 1);
	var flCostR = parseFloat((Math.random() * 8)).toFixed(1);
	var totIssue = (netIssue / (1 - (flCostR/100))).toFixed(2); 
	var flCost = totIssue - netIssue;
	var algoComp = ['BMW', 'Apple Computers', 'Microsoft', 'Facebook', 'ABC Inc.', 'BAMEB Motorcycles', 'Tofrandi Naturals', 'RentBooks.com', 'DeNeau Enterprises', 'Parker Sled Manufacturing'];
	var invBank = ['J.P. Morgan', 'Goldman Sachs', 'Merrill Lynch', 'Morgan Stanley', 'Citigroup', 'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse'];
	var compName = algoComp[Math.floor(Math.random() * (algoComp.length))];
	var ibName = invBank[Math.floor(Math.random() * (invBank.length))];

	qWords = compName + " needs to raise funds of $" + netIssue + " million. They want to issue bonds through " + ibName + " and are told that the floatation costs are " +
		flCostR + "%.  In millions and rounded to two decimal places, what is the total amount of the offering in order to raise the $" + netIssue +" million necessary?";
	correct = totIssue;

	var valuePass = [correct, qWords];
	return valuePass;
};

var qFloat2 = function(){
	var netIssue = Math.floor((Math.random()*1000) + 1);
	var flCostR = parseFloat((Math.random() * 8)).toFixed(1);
	var totIssue = (netIssue / (1 - (flCostR/100))).toFixed(2); 
	var flCost = (totIssue - netIssue).toFixed(2);
	var algoComp = ['BMW', 'Apple Computers', 'Microsoft', 'Facebook', 'ABC Inc.', 'BAMEB Motorcycles', 'Tofrandi Naturals', 'RentBooks.com', 'DeNeau Enterprises', 'Parker Sled Manufacturing'];
	var invBank = ['J.P. Morgan', 'Goldman Sachs', 'Merrill Lynch', 'Morgan Stanley', 'Citigroup', 'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse'];
	var compName = algoComp[Math.floor(Math.random() * (algoComp.length))];
	var ibName = invBank[Math.floor(Math.random() * (invBank.length))];

	var qWords = compName + " needs to raise funds of $" + netIssue + " million. They want to issue bonds through " + ibName + " and are told that the floatation costs are " +
		flCostR + "%.  In millions and rounded to two decimal places, what is the total amount " + compName + " will pay in floatation costs?";
	correct = flCost;

	var valuePass = [correct, qWords];
	return valuePass;
};

var qFloat3 = function(){
	var netIssue = Math.floor((Math.random()*1000) + 1);
	var flCostR = parseFloat((Math.random() * 8)).toFixed(1);
	var totIssue = (netIssue / (1 - (flCostR/100))).toFixed(2); 
	var flCost = totIssue - netIssue;
	var algoComp = ['BMW', 'Apple Computers', 'Microsoft', 'Facebook', 'ABC Inc.', 'BAMEB Motorcycles', 'Tofrandi Naturals', 'RentBooks.com', 'DeNeau Enterprises', 'Parker Sled Manufacturing'];
	var invBank = ['J.P. Morgan', 'Goldman Sachs', 'Merrill Lynch', 'Morgan Stanley', 'Citigroup', 'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse'];
	var compName = algoComp[Math.floor(Math.random() * (algoComp.length))];
	var ibName = invBank[Math.floor(Math.random() * (invBank.length))];

	var qWords = "A $" + totIssue + " bond was just issued by "+ compName + ", that paid " + ibName + " floatation costs of " + flCostR + 
		"%. After paying the investment banker, per bond, how much did " + compName + " receive in this bond issue? (Round to 2 decimal places)";
	correct = netIssue;

	var valuePass = [correct, qWords];
	return valuePass;
};


//starting the reformulation


var qSolveR = function() {
//TVM, solve for value of r
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));

	var qWords = "Given a Present Value of $" + pvLump + " and a future value of $" + fv + " received in " +
						n + " years.  What is your Discount Rate? (Enter as integer)";
	var valuePass = [r, qWords];
	return valuePass;
};

var qNPV = function(){
	var a; 
	var holdSum = 0;
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 6) + 1);
	var CF = [0,0,0,0,0,0,0];
	for (var i=1; i <= n; i++){
		a = Math.floor((Math.random()*999) + 1);
		holdSum += a;
		CF[i] = a;
	}
	CF[0] = (-1 * (holdSum * (1 + (Math.random() - 0.5)))).toFixed(2);
	var NPV = parseFloat(CF[0]);
	for (var i=1; i<=6; i++){
		a=parseFloat(sTVM(i, r, 'X', CF[i]));
		NPV += a;
	}
	NPV = NPV.toFixed(2);
	var qWords = 'You are evaluating a project that will cost $' + -1 * CF[0] + " at inception, and <br> $" + CF[1] + " in 1 year <br> $" + CF[2] + " in 2 years <br> $" +
		CF[3] + " in 3 years <br> $" + CF[4] + " in 4 years <br> $" + CF[5] + " in 5 years, and <br> $" + CF[6] + " in 6 years. <br> If your required return is " + r + 
		"%, what is the NPV? (round to 2 decimal places)";
	var valuePass = [NPV, qWords];
	return valuePass;
};

var qSolveN = function() {
//TVM, solve for value of n
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));

	var correctAnswer = n;
	var qWords = "How long will it take for a value of $" + pvLump + " to turn into $" + fv + " at a rate of " + r + "% ? (enter as integer)";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};

var qSolveFV = function() {
//TVM, compute FV given other inputs
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));

	var correctAnswer = fv;
	var qWords = "Given a value of $" + pvLump + " received in " + n + " years at an interest rate of " + r + "%, what is the Future Value? (enter as integer)";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};

var qSolvePV = function() {
//TVM, compute PV of lump sum
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));

	var correctAnswer = pvLump;
	var qWords = "Compute the Present Value of a payment of $" + fv + " received in " +
						n + " years at a discount rate of " + r + "%.";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};

var qSolveFixedP = function() {
//TVM, compute PV of lump sum
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));

	var correctAnswer = pvAnnuity;
	var qWords = "Compute the present value of " + n + " equal annual payments of $" + pmt +
						" at an interest rate of: " + r + "%, beginning at t=1 (round to 2 decimal places)";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};

var qSolveAnnuity = function() {
//TVM, compute PV of lump sum
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));

	var correctAnswer = pvAnnuity;
	var qWords = "Compute the present value of an ordinary annuity receiving " + n + " annual payments of $" + pmt +
						" at an interest rate of: " + r + "% (round to 2 decimal places)";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};

var qEar1 = function() {
//Interest Rates: Effective Annual Rate Calculations
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var compoundArray = ['monthly', 'semiannual', 'quarterly'];
	randQ = Math.floor((Math.random() * 3));
	var compound = compoundArray[randQ];
	var compoundPer;
	switch (compound) {
		case 'monthly': compoundPer = 12; break;
		case 'semiannual': compoundPer = 2; break;
		case 'quarterly': compoundPer = 4; break;
	}
	var ear = ((Math.pow(1 + (r/compoundPer/100), compoundPer) - 1) * 100).toFixed(2);


	var correctAnswer = ear;
	var qWords = bankName() + " is offering an account that pays a simple " + r + "%, compounded " + compound + "; what is the effective annual rate?" +
							" (enter as percentage and round to 2 decimals)";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};	

var qCouponBond1 = function() {
//Bonds: compute value of coupon bond
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));
	var pvCouponBond = (pvAnnuity + pvLump).toFixed(2);


	var correctAnswer = pvCouponBond;
	var qWords = "Compute the current market value of a bond with a $" + fv + " face value, maturing in " + n + " years, an interest rate of " +
								r + "%, and annual payments of $" + pmt;
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};	

var qCouponBond2 = function() {
//Bonds: compute value of coupon bond
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));
	var pvCouponBond = (pvAnnuity + pvLump).toFixed(2);


	var correctAnswer = pvCouponBond;
	var qWords = femaleName() + " is considering buying a " + compName() + " bond for $" + (pvCouponBond * 1.05) + ".  This bond has a maturity value of $" + fv +
							", maturing in " + n + " years, with comparable interest rates of " +	r + "%, and coupon payments of $" + pmt + ". What should she pay?";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};	

var qCouponBond3 = function() {
//Bonds: compute value of coupon bond
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));
	var pvCouponBond = (pvAnnuity + pvLump).toFixed(2);


	var correctAnswer = pvCouponBond;
	var qWords = compName() + " just issued bonds with a par value of $" + fv + ", with a " + n + " year term and a coupon rate of " + (pmt/fv*100).toFixed(2) + 
							"%. You see comparable interest rates of " + r + "%; What should you pay for these?";
	var valuePass = [correctAnswer, qWords];
	return(valuePass);
};	

//
// 10/28 functions

var qCouponExp = function() {
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var fv = Math.floor((Math.random()*1000) + 1);
	var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
	var pmt = Math.floor((Math.random()*100)+ 1);
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));
	var pvCouponBond = (pvAnnuity + pvLump).toFixed(2);
	var qWords = compName() + " is considering floating a bond offering and is attempting to determine what kind of interest rate they would be paying."+
		" The market price of comparable bonds is $" + pvCouponBond + ", face value of $" + fv + ". The CEO of " + compName() + ", " + femaleName() + " " + surName() +
		" desires a bond with payments of $" + pmt + " and a maturity in " + n + " years. What is the interest rate?";
	var valuePass = [r, qWords];
	return(valuePass);
};

var qYieldQ1 = function() {
	var num = Math.floor((Math.random()*100)+ 1);
	var y = parseFloat(((Math.random() - 0.5) * 60)).toFixed(1);
	var div = (Math.random() * 10).toFixed(2);			//Generates a value of a dividend
	var p0 = Math.floor((Math.random()*100)+ 1);											//Just renaming for my sake
	var p1 = (((y/100) * p0) + p0 - div).toFixed(2);			//finds ending value of a given yield (r)

	var qWords = femaleName() + " bought " + num + " shares of " + compName() + " one year ago for $" + p0 + " and just sold them for $" + p1 +
				". Over the year she received $" + div + " in dividends.  What was her yield? (Enter as percentage, rounding to one decimal)";
	var valuePass = [y, qWords];
	return(valuePass);
};
var qYieldQ2 = function() {
	var pmt = Math.floor((Math.random()*100)+ 1);
	var y = parseFloat(((Math.random() - 0.5) * 60)).toFixed(1);
	var div = (Math.random() * 10).toFixed(2);			//Generates a value of a dividend
	var p0 = pmt;											//Just renaming for my sake
	var p1 = (( (y/100) * pmt) + pmt - div).toFixed(2);			//finds ending value of a given yield (r)

	var qWords = "You just sold all your shares of " + compName() + " for $" + p1 +" each that you paid $" + p0 + " for one year ago. You can't seem to remember" +
				" what your dividend payments were, but you do know your yield was " + y + "%.  What was your annual dividend? (round to two decimal points)";
	var valuePass = [div, qWords];
	return(valuePass);
};

var qYieldQ3 = function() {
	var pmt = Math.floor((Math.random()*100)+ 1);
	var y = parseFloat(((Math.random() - 0.5) * 60)).toFixed(1);
	var div = (Math.random() * 10).toFixed(2);			//Generates a value of a dividend
	var p0 = pmt;										//Just renaming for my sake
	var p1 = (( (y/100) * pmt) + pmt - div).toFixed(2);			//finds ending value of a given yield (r)

	var qWords = maleName() + " just sold bonds for $" + p1 + " and paid $" + p0 + " one year ago.  Over the year he received interest payments of $" + 
		div + ". What was his yield?  (Enter as percentage, rounding to one decimal)";
	var valuePass = [y, qWords];
	return(valuePass);
};	

var qYieldQ4 = function() {
	var pmt = Math.floor((Math.random()*100)+ 1);
	var y = parseFloat(((Math.random() - 0.5) * 60)).toFixed(1);
	var div = (Math.random() * 10).toFixed(2);			//Generates a value of a dividend
	var p0 = pmt;										//Just renaming for my sake
	var p1 = (( (y/100) * pmt) + pmt - div).toFixed(2);			//finds ending value of a given yield (r)

	var qWords = femaleName() + " bought shares in " + compName() + " one year ago for $" + p0 + " and just sold them for $" + p1 +
				". Over the year she received quarterly dividends of $" + (div/4) + ".  What was her yield? (Enter as percentage, rounding to one decimal)";
	var valuePass = [y, qWords];
	return(valuePass);
};	

var qDDM1 = function() {
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var n = Math.floor((Math.random() * 10) + 1);
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var pN = (div1 / ((r/100)-(g/100))).toFixed(2);
	var pvLump = parseFloat(solveTVM(n, r, 'X', pN));
	var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', div0));
	var p0 = (pvAnnuity + pvLump).toFixed(2);

	var qWords = "You are valuing a stock from " + compName() + " in which you are estimating a stock price of $" + pN + " in " + n + " years.  Given the relative riskiness of this stock, " +
		"you estimate you need a return of " +	r + "%. For the next " + n + " years, you estimate you will receive $" + div0 + " in annual dividends.  How much is this stock worth today?";

	var valuePass = [p0, qWords];
	return(valuePass);
};

var qConstG1 = function() {
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var pN = (div1 / ((r/100)-(g/100))).toFixed(2);

	var qWords = compName() + " just paid a dividend of $" + div0 + " and is expected to grow at " + g + "%.  You have estimated a required return of " +
		r + "%. What is their current market value?";
	var valuePass = [pN, qWords];
	return(valuePass);
};

var qConstG2 = function() {
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var pN = (div1 / ((r/100)-(g/100))).toFixed(2);

	var qWords = maleName() + " recognizes that " + compName() + " just paid a dividend of $" + div0 + " and estimates that their dividend next year will be $" +
			div1 + ". He thinks that an appropriate return on this stock is " + r + "%.  What is this stock worth today?";
	var valuePass = [pN, qWords];
	return(valuePass);
};

var qConstG3 = function() {
	var fv = Math.floor((Math.random()*1000) + 1);
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var pN = (div1 / ((r/100)-(g/100))).toFixed(2);
	var holder = (pN*0.95).toFixed(2);
	var correct = ((pN-holder) * fv).toFixed(2);

	var qWords = "This morning, you bought " + fv + " shares of " + compName() + " for $" + holder + " each. Right after you bought these shares, their " +
			"earnings report came out.  You now think they will grow at " + g + "% and require a return of " + r + "%.  Their most recent dividend was $" + div0 +
			". What is your total profit(loss) in dollars?";

	var valuePass = [correct, qWords];
	return(valuePass);
};

var qUnevenGrowth = function() {
	var fv = Math.floor((Math.random()*1000) + 1);
	var n = Math.floor((Math.random() * 10) + 1);
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var pvStockAnnuity = parseFloat(solveAnnuity(n, r, 'X', div0)); //check this out, unrealistic values
	var pN = (div1 / ((r/100)-(g/100))).toFixed(2);
	var pdvN = parseFloat(solveTVM(n, r, 'X', pN));
	var p0 = (pvStockAnnuity + pdvN).toFixed(2);

	var qWords = compName() + " has been paying an annual dividend of $" + div0 + " for the past 5 years, and plans to continue for the next " + n + " years. After that, " +
		"they are expected to grow at " + g + "%. Your required return to hold this stock is " + r + "%.  What would you be willing to pay for this stock?";

	var valuePass = [p0, qWords];
	return(valuePass);
};

var qUnevenGrowth2 = function() {
	var n = Math.floor((Math.random() * 10) + 1);
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g1 = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g2 = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);

	var intermediatePV =0;
	var divN;
	for(var i=1; i<=n; i++) {
		divN = (div0* (Math.pow( (1+(g1/100)), i) ) ).toFixed(2);
		intermediatePV = parseFloat(intermediatePV) + parseFloat(solveTVM(i, r, 'X', divN));
	}

	var divNplus = (divN * (1 + (g2/100))).toFixed(2);
	var pN = (divNplus / ((r/100)-(g2/100))).toFixed(2);
	var pdvN = parseFloat(solveTVM(n, r, 'X', pN));

	var p0 = parseFloat(pdvN + intermediatePV);	

	var qWords = compName() + " just paid a dividend of $" + div0 + ". You expect a growth rate of " + g1 + "% for " + n + " years. After that, " +
		"they are expected to grow at " + g2 + "%. Your required return to hold this stock is " + r + "%.  How much is this stock worth?";

	var valuePass = [p0, qWords];
	return(valuePass);
};

var qUnevenGrowth3 = function() {
	var n = Math.floor((Math.random() * 10) + 1);
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g1 = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g2 = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);

	var intermediatePV =0;
	var divN;
	for(var i=1; i<=n; i++) {
		divN = (div0* (Math.pow( (1+(g1/100)), i) ) ).toFixed(2);
		intermediatePV = parseFloat(intermediatePV) + parseFloat(solveTVM(i, r, 'X', divN));
	}

	var divNplus = (divN * (1 + (g2/100))).toFixed(2);
	var pN = (divNplus / ((r/100)-(g2/100))).toFixed(2);
	var pdvN = parseFloat(solveTVM(n, r, 'X', pN));

	var p0 = parseFloat(pdvN + intermediatePV);	

	var qWords = "You received a dividend of $" + div0 + " this morning and are attempting to decide if you should hold onto this stock. You expect this stock to grow at " + g1 + 
	"% for " + n + " years. After that, you think they will grow at " + g2 + "%. Given the level of risk, you need a return of" + r + "%.  How much is this stock worth?";

	var valuePass = [p0, qWords];
	return(valuePass);
};


var qCAPM1 = function() {
	var beta = parseFloat((Math.random() * 2).toFixed(2));
	var RF = parseFloat((Math.random() * 5).toFixed(2));
	var RP = parseFloat((Math.random() * 11) + 3).toFixed(2);
	var capmR = (RF + (beta * RP)).toFixed(2);

	var qWords = "You are valuing stock in " + compName() + " and are estimating their Beta at " + beta + ", the risk free rate at " + RF + "%, and equity risk premium at " +
		RP + ". What is your required return in order to invest in this company? (enter rounded to 2 decimal places)";
	var valuePass = [capmR, qWords];
	
	return(valuePass);
};

var qCAPM2 = function() {
	var beta = parseFloat((Math.random() * 2).toFixed(2));
	var RF = parseFloat((Math.random() * 5).toFixed(2));
	var RM = parseFloat((Math.random() * 12) + 3).toFixed(2);
	var RP = RM - RF;
	var capmR = (RF + (beta * RP)).toFixed(2);

	var qWords = compName() + " has a Beta of " + beta + " and you are needing the required return.  You know the risk free rate is " + RF + "%, and the return on the market is " +
		RM + "%. What is your required return in order to invest in this company? (enter as percentage rounded to 2 decimal places)";
	var valuePass = [capmR, qWords];
	
	return(valuePass);
};

var qCAPM3 = function() {
	var beta = parseFloat((Math.random() * 2).toFixed(2));
	var RF = parseFloat((Math.random() * 5).toFixed(2));
	var RP = parseFloat((Math.random() * 11) + 3).toFixed(2);
	var capmR = (RF + (beta * RP)).toFixed(2);

	var qWords = "As an analyst for " + invBankName() + ", you have been asked to value common stock for " + compName() + ". You have estimated their Beta at " + beta + 
		", the risk free rate at " + RF + "%, and the risk premium on the market at " +	RP + "%. What is r? (enter as percentage rounded to 2 decimal places)";
	var valuePass = [capmR, qWords];
	
	return(valuePass);
};

var qCAPM4 = function() {
	var beta = parseFloat((Math.random() * 2).toFixed(2));
	var RF = parseFloat((Math.random() * 5).toFixed(2));
	var RM = parseFloat((Math.random() * 12) + 3).toFixed(2);
	var RP = RM - RF;
	var capmR = (RF + (beta * RP)).toFixed(2);

	var qWords = "You are considering adding stock in " + compName() + " to your portfolio. You found their Beta at " + beta + 
		", the risk free rate as proxied by 10-year US Treasuries at " + RF + "%, and return on the market as proxied by the S&P 500  at " + RM + 
		"%. What return do you need to buy this stock? (enter as percentage rounded to 2 decimal places)";
	var valuePass = [capmR, qWords];
	
	return(valuePass);
};

var qCAPMext1 = function() {
	var r = parseFloat(Math.floor((Math.random() * 30) + 1));
	var g = Math.floor(r - (r * Math.random()));
	var div0 = (Math.random() * 8).toFixed(2);
	var div1 = (div0*(1+(g/100))).toFixed(2);
	var beta = parseFloat((Math.random() * 2).toFixed(2));
	var RF = parseFloat((Math.random() * 5).toFixed(2));
	var RP = ((Math.random() * 11) + 3).toFixed(2);
	var capmR = (RF + (beta * RP)).toFixed(2);
	var capmG = Math.floor(capmR - (capmR * Math.random()));
	var capmP0 = (div1/((capmR-capmG)/100)).toFixed(2);

	var qWords = "Given a Beta of " + beta + ", RF of " + RF + ", and a market equity risk premium of " + RP + ", what is the current value of a stock with a growth rate of " +
		capmG + "%, and an expected dividend next year of " + div1 +"?";
	var valuePass = [capmP0, qWords];
	return(valuePass);
};

var qrHat = function() {
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

var qStdDev = function() {
	var s1 = (Math.random() * 0.5).toFixed(2);
	var s2 = (Math.random() * 0.5).toFixed(2);
	var s3 = (1-s1-s2).toFixed(2);
	var r1 = ((Math.random() * 50) - 15).toFixed(0); //all returns in % format
	var r2 = ((Math.random() * 50) - 15).toFixed(0);
	var r3 = ((Math.random() * 50) - 15).toFixed(0);
	var rHat = (s1*r1 + s2*r2 + s3*r3).toFixed(2);
	var sDev = Math.sqrt((Math.pow(r1-rHat,2)*s1) + (Math.pow(r2-rHat,2)*s2) + (Math.pow(r3-rHat,2)*s3)).toFixed(2);

	var qWords = "What is the standard deviation of an investment given the following:" +
		"<br> outcome 1 probability: " + s1 + "    return: " + r1 + "%" + 
		"<br> outcome 2 probability: " + s2 + "    return: " + r2 + "%" + 
		"<br> outcome 3 probability: " + s3 + "    return: " + r3 + "%" + 
		"<br>(enter rounded to 2 decimal places)";
	var valuePass = [sDev, qWords];
	return(valuePass);
};

var qCoefVar = function() {
	var s1 = (Math.random() * 0.5).toFixed(2);
	var s2 = (Math.random() * 0.5).toFixed(2);
	var s3 = (1-s1-s2).toFixed(2);
	var r1 = ((Math.random() * 50) - 15).toFixed(0); //all returns in % format
	var r2 = ((Math.random() * 50) - 15).toFixed(0);
	var r3 = ((Math.random() * 50) - 15).toFixed(0);
	var rHat = (s1*r1 + s2*r2 + s3*r3).toFixed(2);
	var sDev = Math.sqrt((Math.pow(r1-rHat,2)*s1) + (Math.pow(r2-rHat,2)*s2) + (Math.pow(r3-rHat,2)*s3)).toFixed(2);
	var CV = (sDev/rHat).toFixed(2);

	var qWords = "What is the coefficient of variation of an investment given the following:" +
		"<br> outcome 1 probability: " + s1 + "    return: " + r1 + "%" + 
		"<br> outcome 2 probability: " + s2 + "    return: " + r2 + "%" + 
		"<br> outcome 3 probability: " + s3 + "    return: " + r3 + "%" + 
		"<br>(enter rounded to 2 decimal places)";
	var valuePass = [CV, qWords];
	return(valuePass);
};

/*

			//Generating random names for all questions
			var firstName, genderSub, genderPos, genderObj;
			var compName = algoComp[Math.floor(Math.random() * (algoComp.length))];
			var lastName = surName[Math.floor(Math.random() * (surName.length))];
			var ibName = invBank[Math.floor(Math.random() * (invBank.length))];
			var bankName = bName[Math.floor(Math.random() * (bName.length))];
			if (Math.random() > 0.5) {
				firstName = maleName[Math.floor(Math.random() * (maleName.length))];
				genderSub = "he";
				genderObj = "him";
				genderPos = "his";
			} else {
				firstName = femaleName[Math.floor(Math.random() * (femaleName.length))];
				genderSub = "she";
				genderObj = "her";
				genderPos = "her";
			}

			//Contained directly below in this section are the algorithmic variables and correct answers
			var r = parseFloat(Math.floor((Math.random() * 30) + 1));
			var n = Math.floor((Math.random() * 10) + 1);
			var fv = Math.floor((Math.random()*1000) + 1);
			var pvLump = parseFloat(solveTVM(n, r, 'X', fv));
			var pmt = Math.floor((Math.random()*100)+ 1);
			var pvAnnuity = parseFloat(solveAnnuity(n, r, 'X', pmt));
			var pvCouponBond = (pvAnnuity + pvLump).toFixed(2);

			var compoundArray = ['monthly', 'semiannual', 'quarterly'];
			randQ = Math.floor((Math.random() * 3));
			var compound = compoundArray[randQ];
			var compoundPer;
			switch (compound) {
				case 'monthly': compoundPer = 12; break;
				case 'semiannual': compoundPer = 2; break;
				case 'quarterly': compoundPer = 4; break;
			}
			var ear = ((Math.pow(1 + (r/compoundPer/100), compoundPer) - 1) * 100).toFixed(2);

			//stock valuations
			var g = Math.floor(r - (r * Math.random()));
			//var g1 = (Math.Floor(Math.Random() * 15)).toFixed(0); //for uneven growth rates
			var div0 = (Math.random() * 8).toFixed(2);
			var div1 = (div0*(1+(g/100))).toFixed(2);
			var pvStockAnnuity = parseFloat(solveAnnuity(n, r, 'X', div0)); //check this out, unrealistic values
			var pN = (div1 / ((r/100)-(g/100))).toFixed(2);
			var pdvN = parseFloat(solveTVM(n, r, 'X', pN));
			var p0 = (pvStockAnnuity + pdvN).toFixed(2);

			//risk and rates of return
			var beta = parseFloat((Math.random() * 2).toFixed(2));
			var RF = parseFloat((Math.random() * 5).toFixed(2));
			var RP = ((Math.random() * 11) + 3).toFixed(2);
			var RM = RP + RF;
			var capmR = (RF + (beta * RP)).toFixed(2);
			var s1 = (Math.random() * 0.5).toFixed(2);
			var s2 = (Math.random() * 0.5).toFixed(2);
			var s3 = (1-s1-s2).toFixed(2);
			var r1 = ((Math.random() * 50) - 15).toFixed(0); //all returns in % format
			var r2 = ((Math.random() * 50) - 15).toFixed(0);
			var r3 = ((Math.random() * 50) - 15).toFixed(0);
			var rHat = (s1*r1 + s2*r2 + s3*r3).toFixed(2);
			var sDev = Math.sqrt((Math.pow(r1-rHat,2)*s1) + (Math.pow(r2-rHat,2)*s2) + (Math.pow(r3-rHat,2)*s3)).toFixed(2);
			var CV = (sDev/rHat).toFixed(2);
			var capmG = Math.floor(capmR - (capmR * Math.random()));
			var capmP0 = div1/((capmR-capmG)/100);
*/