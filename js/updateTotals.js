/*
*
* Author: Ashley Vallette
* Creation Date: April 3, 2022
* Purpose: Gathers all the information from the page and calculates totals, and change value.
* Requires: /img, /css, /js - including jquery > 3.3.1
*
* */

// Allow the reset of the page, calculateChange function, and updateTotals. 
(() => {
    $('#changeButton').on("click", calculateChange);
    $('#resetForm').on("click", resetForm);
    $('#caa').on("change", updateTotals);
    $("#mil").on("change", updateTotals);
    $('#fun').on("change", updateTotals);
    $('#children').on("change", updateTotals);
    $('#adults').on("change", updateTotals);
    $('#children').on("change", updateTotals);
})();



// declare global vars
let $totalAfterTax = 0.00;

// create function to do the math calculation
function updateTotals() {
    // get the data
    let $adults = $("#adults").val();
    let $children = $("#children").val();
    // ensure a qty is selected for above
    if ($adults == 0 && $children == 0) {
        // they need to select a qty for children or adults
        alert("You must select a quantity for adults or children.");
    } else {

        // calculate costs

        document.getElementById("numAdults").value = $adults;
        let $adultTotal = $adults * 4.00;

        document.getElementById("numChildren").value = $children;
        let $childTotal = $children * 2.00;

        $("#totalAdultsDiv").innerHTML = "$" + $adultTotal.toFixed(2);
        $("#totalChildrenDiv").innerHTML = "$" + $childTotal.toFixed(2);
        let $totalBeforeTax = ($adultTotal + $childTotal);

        // get discount radio choice
        let $deduct = 0;
        let $discountString = "None";
        if (document.getElementById("caa").checked == true) {
            $deduct = $totalBeforeTax * .10;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "CAA saved $" + $deduct.toFixed(2);
        } else if (document.getElementById("mil").checked == true) {
            $deduct = $totalBeforeTax * .25;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Military saved $" + $deduct.toFixed(2);
        } else if (document.getElementById("fun").checked == true) {
            $deduct = $totalBeforeTax * .50;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Super Fun Club saved $" + $deduct.toFixed(2);
        }

        document.getElementById("discountString").innerHTML = $discountString;

        $totalAfterTax = $totalBeforeTax * 1.1;
        document.getElementById("totalBeforeTaxDiv").innerHTML = "$" + $totalBeforeTax.toFixed(2);
        document.getElementById("totalAfterTaxDiv").innerHTML = "$" + $totalAfterTax.toFixed(2);
    } // end if no adults or children selected


} // end update Totals function

//create function to reset the form
function calculateChange() {

    let $amountGiven = $("#changeAmount").val();
    let $changeDue = $amountGiven-$totalAfterTax;
    $("#changeDue").html("$"+$changeDue.toFixed(2));
    $("#changeOutput").css("display", "block");
}
//create function to reset the form
function resetForm() {
    window.location = "miniGolfKiosk.html";
}




