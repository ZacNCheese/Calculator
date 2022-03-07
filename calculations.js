
function clearScreen() {
    document.getElementById("result").value = "";
}

function findOperator(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] == "+") {
            return i;
        }
        if(array[i] == "-") {
            return i;
        }
        if(array[i] == "/") {
            return i;
        }
        if(array[i] == "*") {
            return i;
        }
    }
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculateResult(result) {

    var result = document.getElementById("result").value;

    //ADDITION -----------------------------------------------------------------
    if(result.includes("+") == true) {
        var answer = 0;
        var firstHalf = '';
        var secondHalf = '';
        result.split('+'); //This will return an array with the two values we need: reult[0] and result[1]
        var operPos = findOperator(result);
        for(var i = 0; i < result.length; i++) {
            if(i < operPos) {
                firstHalf += result[i];
            }
            if(i > operPos) {
                secondHalf += result[i];
            }
        }
        //console.log(firstHalf);
        //console.log(secondHalf);
        //console.log(result[0]);
        //console.log(result[1]);
        answer = parseFloat(firstHalf) + parseFloat(secondHalf);
        //console.log(answer); //or set answer to a certain div id and display on calculator screen 
    }

    //SUBTRACTION ----------------------------------------------------------------------
    if(result.includes("-") == true) {
        var answer = 0;
        var firstHalf = '';
        var secondHalf = '';
        result.split('-'); //This will return an array with the two values we need: reult[0] and result[1]
        var operPos = findOperator(result);
        for(var i = 0; i < result.length; i++) {
            if(i < operPos) {
                firstHalf += result[i];
            }
            if(i > operPos) {
                secondHalf += result[i];
            }
        }
        //console.log(firstHalf);
        //console.log(secondHalf);
        //console.log(result[0]);
        //console.log(result[1]);
        answer = parseFloat(firstHalf) - parseFloat(secondHalf);
        //console.log(answer); //or set answer to a certain div id and display on calculator screen 
    }

    //DIVISION ---------------------------------------------------------------------------------------
    if(result.includes("/") == true) {
        var answer = 0;
        var firstHalf = '';
        var secondHalf = '';
        result.split('/'); //This will return an array with the two values we need: reult[0] and result[1]
        var operPos = findOperator(result);
        for(var i = 0; i < result.length; i++) {
            if(i < operPos) {
                firstHalf += result[i];
            }
            if(i > operPos) {
                secondHalf += result[i];
            }
        }
        //console.log(firstHalf);
        //console.log(secondHalf);
        //console.log(result[0]);
        //console.log(result[1]);
        answer = parseFloat(firstHalf) / parseFloat(secondHalf);
        //console.log(answer); //or set answer to a certain div id and display on calculator screen 
    }

    //MULTIPLICATION -----------------------------------------------------------------------------------
    if(result.includes("*") == true) {
        var answer = 0;
        var firstHalf = '';
        var secondHalf = '';
        result.split('*'); //This will return an array with the two values we need: reult[0] and result[1]
        var operPos = findOperator(result);
        for(var i = 0; i < result.length; i++) {
            if(i < operPos) {
                firstHalf += result[i];
            }
            if(i > operPos) {
                secondHalf += result[i];
            }
        }
        //console.log(firstHalf);
        //console.log(secondHalf);
        //console.log(result[0]);
        //console.log(result[1]);
        answer = parseFloat(firstHalf) * parseFloat(secondHalf);
        //console.log(answer); //or set answer to a certain div id and display on calculator screen 
    }

    document.getElementById("result").value = answer;
}   
