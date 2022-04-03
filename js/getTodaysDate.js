/*
*
* Author: Ashley Vallette
* Creation Date: April 3, 2022
* Purpose: Gets the current date and displays it to the page.
* Requires: /img, /css, /js - including jquery > 3.3.1
*
* */

// function to get today's date
function getTodaysDate() {


    // Create new date
    let today = new Date();
    // gather each part of the date
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    // combine everything to a friendly string
    today = yyyy + '-' + mm + '-' + dd;

    return today.toString();


}
// Display the date on the page
document.getElementById("todaysDate").innerHTML = getTodaysDate();
