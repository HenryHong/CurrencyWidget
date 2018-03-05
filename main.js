//Variable declaration 
var preamt = document.getElementById("Amount");
var postamt = document.getElementById("ConvertedAmt");
var C1 = document.getElementById("Currency1");
var C2 = document.getElementById("Currency2");

var preamt2 = document.getElementById("Amount2");
var postamt2 = document.getElementById("ConvertedAmt2");
var C3 = document.getElementById("Currency3");
var C4 = document.getElementById("Currency4");

var preamt3 = document.getElementById("Amount3");
var postamt3 = document.getElementById("ConvertedAmt3");
var C5 = document.getElementById("Currency5");
var C6 = document.getElementById("Currency6");
var url = "https://api.fixer.io/latest?base=";


//Disclaimer alert link setup
var disclaimer = document.getElementById("disclaimer");
disclaimer.addEventListener("click", function (){DisclaimerClick();});
var disclaimer2 = document.getElementById("disclaimer2");
disclaimer2.addEventListener("click", function (){DisclaimerClick();});
var disclaimer3 = document.getElementById("disclaimer3");
disclaimer3.addEventListener("click", function (){DisclaimerClick();});



//After an input is put into the first box or either of the selectors is changed, the widget recalculate the exchangerate.
preamt.addEventListener("input", function (){Exchange(1);});
C1.addEventListener("change", function (){Exchange(1);});
C2.addEventListener("change", function (){Exchange(1);});

preamt2.addEventListener("input", function (){Exchange(2);});
C3.addEventListener("change", function (){Exchange(2);});
C4.addEventListener("change", function (){Exchange(2);});

preamt3.addEventListener("input", function (){Exchange(3);});
C5.addEventListener("change", function (){Exchange(3);});
C6.addEventListener("change", function (){Exchange(3);});



// getText (String url, Int Currency2)
// Fetchs the information from the API and pulls the proper rates according to Currency2
function getText(url, Currency2, Num1, Num2){
	var result;
	fetch(url)
	 .then((res) => res.json())
	 .then((data) => {
		 result = Convert(data.rates[Currency2], Num1);
		 Num2.value = result;
	 }) 
}

// Convert (int ExchangeRate) 
//   Calculate the exchange value by multiplying the first input value and the exchange rate.
function Convert (ExchangeRate, Num1){
    var number = parseFloat(Num1.value) || 0;
	var result = number * ExchangeRate;
	return result.toFixed(2);
}

// CreateUrl (int Currency1, int Currency2) 
// Create the correct URL for the fetch request.
function CreateUrl (Currency1, Currency2, Num1, Num2){
	url = url + Currency1;
	getText(url, Currency2, Num1, Num2);
	url = "https://api.fixer.io/latest?base=";
}

// Exchange function that checkes if the first and second select options are the same. 
function Exchange (choice){
	
	if(choice == 1){
		var Currency1 = C1.options[C1.selectedIndex].value;
		var Currency2 = C2.options[C2.selectedIndex].value;
		if ((isNaN(preamt.value) != true) && (preamt.value >= 0)){
			if (Currency1 == Currency2){
					result = parseFloat(preamt.value)|| 0;
					
					console.log(preamt.value);
					console.log(result);
					
					postamt.value = result.toFixed(2);
			}
			else {
				CreateUrl(Currency1, Currency2, preamt, postamt);
			}
		}
		else{
			alert("Your input is invalid, please try again");
		}
	}
	
	else if(choice == 2){
		var Currency3 = C3.options[C3.selectedIndex].value;
        var Currency4 = C4.options[C4.selectedIndex].value;
		if ((isNaN(preamt2.value) != true) && (preamt2.value >= 0)){
			if (Currency3 == Currency4){
					result = parseFloat(preamt2.value)|| 0;
					postamt2.value = result.toFixed(2);
			}
			else {
				CreateUrl(Currency3, Currency4, preamt2, postamt2);
			}
		}
		else{
			alert("Your input is invalid, please try again");
		}
	}
	
	else if(choice == 3){
		var Currency5 = C5.options[C5.selectedIndex].value;
        var Currency6 = C6.options[C6.selectedIndex].value;
		if ((isNaN(preamt3.value) != true) && (preamt3.value >= 0)){
			if (Currency5 == Currency6){
					result = parseFloat(preamt3.value)|| 0;
					postamt3.value = result.toFixed(2);
			}
			else {
				CreateUrl(Currency5, Currency6, preamt3, postamt3);
			}
		}
		else{
			alert("Your input is invalid, please try again");
		}
	}
	
	
}


// DisclaimerClick function that creats the alert if the disclaimer text is clicked.
function DisclaimerClick (){
	alert("This widget is utilizing an API from Fixer.IO to fetch the most up-to-date exchange rate between the options selected.");
}
