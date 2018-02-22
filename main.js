var preamt = document.getElementById("Amount");
var postamt = document.getElementById("ConvertedAmt");
var C1 = document.getElementById("Currency1");
var C2 = document.getElementById("Currency2");
var url = "https://api.fixer.io/latest?base=";

var disclaimer = document.getElementById("disclaimer");
disclaimer.addEventListener("click", function (){DisclaimerClick();});



preamt.addEventListener("input", function (){Exchange();});
C1.addEventListener("change", function (){Exchange();});
C2.addEventListener("change", function (){Exchange();});




function getText(url, Currency2){
	fetch(url)
	 .then((res) => res.json())
	 .then((data) => {
		 console.log(data.base);
		 console.log(data.date);
		 console.log(data.rates[Currency2]);
		 console.log(Currency2);
		 Convert(data.rates[Currency2]);
	 }) 
}

function Convert (ExchangeRate){
    var number = parseFloat(preamt.value) || 0;
	var result = number * ExchangeRate;
	postamt.value = result.toFixed(2);
	
}


function CreateUrl (Currency1, Currency2){
	url = url + Currency1;
    console.log(url);
	getText(url, Currency2);
	url = "https://api.fixer.io/latest?base=";
}


function Exchange (){
	var Currency1 = C1.options[C1.selectedIndex].value;
    var Currency2 = C2.options[C2.selectedIndex].value;
	console.log(preamt);
	console.log(preamt);
	console.log(C1);
	console.log(C2);
	console.log(Currency1);
	console.log(Currency2);

	
	if (Currency1 == Currency2){
		Convert(1);
	}
	else {
		CreateUrl(Currency1, Currency2);
	}
}



function DisclaimerClick (){
	alert("This widget is utilizing an API from Fixer.IO to fetch the most up-to-date exchange rate between the options selected.");
}