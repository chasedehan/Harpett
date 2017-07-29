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

	var solveAnnuityPV = function (n, r, PMT, FV) {
	//Finds the PV of an annuity. Enter r as a percentage
		var PVp = 0;
		var PVa = 0;
		for (var t = 1; t <= n; t += 1) {
			PVp = solveTVM(t, r, 'X', PMT);
			PVa += PVp;
		}
		PVa += solveTVM(n, r, 'X', FV);
		return PVa;
	};
};
