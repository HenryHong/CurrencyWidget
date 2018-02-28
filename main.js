//Variable declaration 
var preamt = document.getElementById("Amount");
var postamt = document.getElementById("ConvertedAmt");
var C1 = document.getElementById("Currency1");
var C2 = document.getElementById("Currency2");
var url = "https://api.fixer.io/latest?base=";


//Disclaimer alert link setup
var disclaimer = document.getElementById("disclaimer");
disclaimer.addEventListener("click", function (){DisclaimerClick();});


//After an input is put into the first box or either of the selectors is changed, the widget recalculate the exchangerate.
preamt.addEventListener("input", function (){Exchange();});
C1.addEventListener("change", function (){Exchange();});
C2.addEventListener("change", function (){Exchange();});



// getText (String url, Int Currency2)
// Fetchs the information from the API and pulls the proper rates according to Currency2
function getText(url, Currency2){
	fetch(url)
	 .then((res) => res.json())
	 .then((data) => {
		 /*console.log(data.base);
		 console.log(data.date);
		 console.log(data.rates[Currency2]);
		 console.log(Currency2);*/
		 Convert(data.rates[Currency2]);
	 }) 
}

// Convert (int ExchangeRate) 
// Calculate the exchange value by multiplying the first input value and the exchange rate.
function Convert (ExchangeRate){
    var number = parseFloat(preamt.value) || 0;
	var result = number * ExchangeRate;
	postamt.value = result.toFixed(2);
	
}

// CreateUrl (int Currency1, int Currency2) 
// Create the correct URL for the fetch request.
function CreateUrl (Currency1, Currency2){
	url = url + Currency1;
    console.log(url);
	getText(url, Currency2);
	url = "https://api.fixer.io/latest?base=";
}

// Exchange function that checkes if the first and second select options are the same. 
function Exchange (){
	var Currency1 = C1.options[C1.selectedIndex].value;
    var Currency2 = C2.options[C2.selectedIndex].value;
	/*console.log(preamt);
	console.log(preamt);
	console.log(C1);
	console.log(C2);
	console.log(Currency1);
	console.log(Currency2);*/

	if ((isNaN(preamt.value) != true) && (preamt.value >= 0)){
		if (Currency1 == Currency2){
				Convert(1);
		}
		else {
			CreateUrl(Currency1, Currency2);
		}
	}
	else{
		alert("Your input is invalid, please try again");
	}
}


// DisclaimerClick function that creats the alert if the disclaimer text is clicked.
function DisclaimerClick (){
	alert("This widget is utilizing an API from Fixer.IO to fetch the most up-to-date exchange rate between the options selected.");
}
