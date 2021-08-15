function compute()
{
    // Initialize variables to calculate interest 

    var result = document.getElementById("result");
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var newString = "Interest: ";

    // If number input is not a positive number, ask for a positive number and focus required field
    if (principal < 1){ 
        alert("Please enter positive numbers.");
        document.getElementById("principal").focus();
    } else {
        // Set a string with the information
        newString = newString + "\nIf you deposit " + principal + ", \nat an interest rate of " + rate + "%.\nYou will receive an amount of " + interest + ", \n in the year " + year + ".\n";
        result.innerText= newString;
    }   
}

// Updates rate when the slider is moved
function updateRate(){
    var rateval = document.getElementById("rate").value;
    var changeable = document.getElementById("rate_val");
    changeable.textContent=rateval + "%";
}

        