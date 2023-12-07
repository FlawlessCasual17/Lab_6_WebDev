/****************** YOUR NAME: Kris Schneider
 The instructions describe the missing logic that is needed;
 you will translate these into JavaScript in the places indicated.
 You are encouraged to use the provided naming convention for ease of review.
 */
/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
// INSERT YOUR CODE HERE
let modelName = '', duration = 0


/****************** helper function ******************/
/* Create a function called recalculate() which will
 - create a variable to represent the calculated-cost span element. That will look something like:
 // let costLabel = document.getElementById("calculated-cost");
 - check the value of the modelName variable, and use that to calculate the new total cost:
 e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
 If modelName is currently "CPRG", duration * 213 gives us the new total cost.
 - Set the value of the calculated-cost element's innerHTML to this new value
 */

// INSERT YOUR CODE HERE
function Recalculate() {
    // A variable that holds an HTMLElement value.
    let costLabel = document
        .getElementById("calculated-cost")
    let newTotalCost // Represents the NEW total cost.

    switch (modelName) { // @formatter:off
        /*
            Set the value of `newTotalCost` to 100
            times the duration when `modelName`
            equals 'XYZ'
         */
        case 'XYZ':
            newTotalCost = duration * 100; break
        /*
            Set the value of `newTotalCost` to 213
            times the duration when `modelName`
            equals 'CRPG'
         */
        case 'CRPG':
            newTotalCost = duration * 213; break
    } // @formatter:on

    // Sets `HTMLElement.innerHTML` to the NEW total cost.
    costLabel.innerHTML = newTotalCost
}


/****************** model button logic ******************/
// @formatter:off
/*
 * first, create a variable to represent the "Switch Model"
 pseudo-button (hint: can use getElementById)
 * second, create a function called changeModel() which checks the
 value of the model name variable.
 * This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG",
        and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ",
        and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
 * finally, uncomment the following line of JavaScript to have
 this function run automatically whenever the pseudo-button is clicked:
 // modelButton.addEventListener("click", changeModel);
 */
// @formatter:on
// INSERT YOUR CODE HERE
let modelButton = document.getElementById("switchButton")

modelName = 'XYZ'

function ChangeModel() {
    let modelText = document.getElementById("model-text")

    switch (modelName) { // @formatter:off
        case 'XYZ':
            modelName = 'CPRG'
            modelText.innerHTML = 'Model CPRG'
            break
        case 'CPRG':
            modelName = 'XYZ';
            modelText.innerHTML = 'Model XYZ'
            break
    } // @formatter:on

    Recalculate() // Recalculating the total cost.
}

modelButton.addEventListener("click", ChangeModel)


/****************** duration button logic ******************/
// @formatter:off

/*
 - first, create a variable to represent the "Change Duration" pseudo-button.
 - then, create a function called changeDuration() that will
    - create a variable to represent the duration-text span element
    - prompt() the user for a new duration
    - save the result of the prompt() to the duration variable
    - change the innerHTML of the duration-text span element to this new value
    - recalculate() the total cost/
 - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
 */

// @formatter:on

// INSERT YOUR CODE HERE