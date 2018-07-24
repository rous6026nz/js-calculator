// -------------------------------------------------------------------------------------------------
// FILE:   MAIN.JS
// AUTHOR: ZAINE KINGI
// VER:    1.0
// DESC:   Main JavaScript file to provide all required functionality for the JavaScript calculator.
// =================================================================================================

// VARIABLE BINDINGS
    // Create a variable to store the users entries in an array - entries.
    var entries = [],

    // Create a variable to store the total and set to 0 - total.
        total = 0,

    // Create a variable to store each button press value and set to an empty string - temp.
        temp = "",

    // Create a variable to reference the calculator input field - display.
        display = document.getElementById('answer'),

// BUTTON EVENT LISTENER
    // Create a variable to store all the button elements.
        btnElem = document.querySelectorAll('.button');

    // Add a click event listener on all button elements of the calculator.
    btnElem.forEach(function(ele) {
        ele.addEventListener('click', function() {

            // CALLBACK FUNCTION VARIABLE BINDINGS
            // Create a variable to store the text value of each button element clicked - val.
            var val = ele.innerHTML;

            // ------------------------------------------------------
            // HELPER FUNCTIONS
            // ======================================================

            // ------------------------------------------------------
            // Build entries array helper function.
            // Input:   Array
            //          Math Operator
            //          Number
            // -------------------------------------------------------
            function buildArray(arr, mathOp, num) {
                // Push the value of 'temp' on to the 'entries' array.
                arr.push(num);

                // Push the math operation on to the 'entries' array.
                arr.push(mathOp);

                // Set the 'temp' variable to an empty string.
                temp = '';
            }


            // -------------------------------------------------------
            // Clear entry helper function.
            // Input:   Null
            // Output:  Sets the temp variable to an empty string.
            //          Resets the answer value to 0.
            // -------------------------------------------------------
            function clearEntry(){
                // Set the 'temp' variable to an empty string.
                temp = '';

                // Set the #answer value to 0.
                display.value = 0;
            }


            // -------------------------------------------------------
            // Check for numbers or decimal helper function.
            // Input:   Value
            // Output:  Displays a value.
            // -------------------------------------------------------
            function checkIsNum(value) {
                // CHECK IF NUMBER OR DECIMAL
                if(!isNaN(value) || value === '.') {
                    // If it is a number, append to the 'temp' variable.
                    temp += value;

                    console.log(temp);

                    // Display the value of 'temp' as the value of the #answer with a max. character limit of 10.
                    display.value = temp;
                }
            }


            // RUN CHECKS FOR BUTTON TEXT VALUES:
            checkIsNum(val);

            // CHECK IF NOT EQUAL, AC, CE & isNaN.
            if(isNaN(val) && val !== '=' && val !== 'AC' && val !== 'CE' ) buildArray(entries, val, temp);

            // CHECK IF 'AC'
            if(val === 'AC') {
                // Set the 'entries' array to an empty array.
                entries = [];

                // Set the 'total' variable to 0.
                total = 0;

                // Call the clearEntry helper function.
                clearEntry();
            }

            // CHECK IF 'CE'
            if(val === 'CE') {
                // Call the clearEntry helper function.
                clearEntry();
            }

            // CHECK IF '='
            if(val === '=') {
                // Push the value of 'temp' on to the 'entries' array.
                entries.push(temp);
        
                // Get the first index of the entries array and store in a variable as a Number - nt.
                var nt = Number(entries[0]);

                // LOOP THROUGH ALL ENTRIES AND BUILD THE EQUATION
                // Start the 'counter' at 1 (the second index of the 'entries' array) which should be a symbol.
                for(var i = 1; i < entries.length; i ++) {

                    // LOOP VARIABLE BINDINGS
                    // Create a variable to store all number entries (will be the current index plus 1).
                    var nextNum = Number(entries[i + 1]);

                    // Assign math symbol entries (will be the current index) to symbols array.
                    var symbol = entries[i];

                    // PERFORM THE MATH
                    // IF THE SYMBOL IS '+', set 'nt' to 'nt' plus 'nextNum'.
                    if(symbol === '+') nt += nextNum;

                    // IF THE SYMBOL IS '-', set 'nt' to 'nt' minus 'nextNum'.
                    if(symbol === '-') nt -= nextNum;

                    // IF THE SYMBOL IS 'X', set 'nt' to 'nt' times 'nextNum'.
                    if(symbol === 'x') nt *= nextNum;

                    // IF THE SYMBOL IS '÷', set 'nt' to 'nt' divided by 'nextNum'.
                    if(symbol === '÷') nt /= nextNum;

                    // INCREAMENT THE COUNTER
                    i ++;
                }
                // END THE LOOP

                // HANDLE NEGATIVE NUMBERS
                // CHECK IF THE FIRST ENTRY IS A NEGATIVE NUMBER
                if(nt < 0) {
                    // Set 'nt' to the absolute value of itself and add '-'.
                    nt = '-' + Math.abs(nt);
                }
                
                // Set the value of #answer to 'nt'.
                display.value = nt;

                // Clear the 'entries' array.
                entries = [];

                // Set 'temp' to an empty string.
                temp = '';
            } 
        });
    });