// -------------------------------------------------------------------------------------------------
// FILE:   MAIN.JS
// AUTHOR: ZAINE KINGI
// VER:    1.0
// DESC:   Main JavaScript file to provide all required functionality for the JavaScript calculator.
// =================================================================================================

// VARIABLE BINDINGS
    // Create a variable to store the users entries in an array - entries.
    // Create a variable to store the total and set to 0 - total.
    // Create a variable to store each button press value and set to an empty string - temp.

// BUTTON EVENT LISTENER
    // Add a click event listener on all button elements of the calculator.

    // CALLBACK FUNCTION VARIABLE BINDINGS
    // Create a variable to store the text value of each button element clicked - val.

    // RUN CHECKS FOR BUTTON TEXT VALUES:
        // CHECK IF NUMBER
            // If it is a number, append to the 'temp' variable.
            // Display the value of 'temp' as the value of the #answer with a max. character limit of 10.

        // CHECK IF 'AC'
            // Set the 'entries' array to an empty array.
            // Set the 'total' variable to 0.
            // Set the 'temp' variable to an empty string.
            // Set the #answer value to an empty string.

        // CHECK IF 'CE'
            // Set the 'temp' variable to an empty string.
            // Set the #answer value to an empty string.

        // CHECK IF 'X'
            // Push the value of 'temp' on to the 'entries' array.
            // Push a multiplier(*) on to the 'entries' array.
            // Set the 'temp' variable to an empty string.

        // CHECK IF '÷'
            // Push the value of 'temp' on to the 'entries' array.
            // Push a division(/) on to the 'entries' array.
            // Set the 'temp' variable to an empty string.

        // CHECK IF '='
            // Push the value of 'temp' on to the 'entries' array.
            // Get the first index of the entries array and store in a variable as a Number - nt.

        // LOOP THROUGH ALL ENTRIES AND BUILD THE EQUATION
            // Start the 'counter' at 1 (the second index of the 'entries' array) which should be a symbol.

            // LOOP VARIABLE BINDINGS
                // Create a variable to store all number entries (will be the current index plus 1).
                // Create a variable to store all math symbol entries (will be the current index).

            // PERFORM THE MATH
                // IF THE SYMBOL IS '+'
                    // Set 'nt' to 'nt' plus 'nextNum'.

                // IF THE SYMBOL IS '-'
                    // Set 'nt' to 'nt' minus 'nextNum'.

                // IF THE SYMBOL IS 'X'
                    // Set 'nt' to 'nt' times 'nextNum'.

                // IF THE SYMBOL IS '÷'
                    // Set 'nt' to 'nt' divided by 'nextNum'.

            // INCREAMENT THE COUNTER

        // END THE LOOP

        // HANDLE NEGATIVE NUMBERS
        // Set 'nt' to the absolute value of itself and add '-'.
        // Set the value of #answer to 'nt'.
        // Clear the 'entries' array.
        // Set 'temp' to an empty string.

        // IF BUTTON VALUE NOT EQUAL '=' CONTINUE BUILDING EQUATION
        // Push the value of 'temp' on to the entries array.
        // Push the value of 'val' (the clicked button) to the 'entries' array.
        // Set 'temp' to an empty string.