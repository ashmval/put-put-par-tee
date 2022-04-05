/*
*
* Author: Ashley Vallette
* Creation Date: April 3, 2022
* Purpose: Gathers all the information from the page and calculates totals, and change value.
* Requires: /img, /css, /js - including jquery > 3.3.1
*
* */

window.addEventListener("DOMContentLoaded", init, false);

/*
Function to load jQuery event listeners
*/
function init() {

    $('#changeButton').on("click", calculateChange);
    $('#resetForm').on("click", resetForm);
    $('#caa').on("change", updateTotals);
    $("#mil").on("change", updateTotals);
    $('#fun').on("change", updateTotals);
    $('#children').on("change", updateTotals);
    $('#adults').on("change", updateTotals);
    $('#children').on("change", updateTotals);
}

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
        $("#numAdults").val($adults);
        let $adultTotal = $adults * 4.00;

        $("#numChildren").val($children);
        let $childTotal = $children * 2.00;

        $("#totalAdultsDiv").html("$" + $adultTotal.toFixed(2));
        $("#totalChildrenDiv").html("$" + $childTotal.toFixed(2));
        let $totalBeforeTax = ($adultTotal + $childTotal);

        // get discount radio choice
        let $deduct = 0;
        let $discountString = "None";
        if ($("#caa").is(':checked')) {
            $deduct = $totalBeforeTax * .10;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "CAA saved $" + $deduct.toFixed(2);
        } else if ($("#mil").is(":checked")) {
            $deduct = $totalBeforeTax * .25;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Military saved $" + $deduct.toFixed(2);
        } else if ($("#fun").is(":checked")) {
            $deduct = $totalBeforeTax * .50;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Super Fun Club saved $" + $deduct.toFixed(2);
        }
        $("#discountString").html($discountString);

        $totalAfterTax = $totalBeforeTax * 1.1;

        $("#totalBeforeTaxDiv").html("$" + $totalBeforeTax.toFixed(2));
        $("#totalAfterTaxDiv").html("$" + $totalAfterTax.toFixed(2));


    }
} // end update Totals function

// Calculate the change from the amount given.
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




