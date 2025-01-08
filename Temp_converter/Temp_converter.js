let checkbox, celtofah, celtokel, fahtokel;
checkbox = document.getElementById("reverse");
celtofah = document.getElementById("celtofah");
celtokel = document.getElementById("celtokel");
fahtokel = document.getElementById("fahtokel");




// FUNCTIONSFOR CONVERSION

function ftoc(feh) {
    feh -= 32;
    feh = feh * 5;
    feh = feh / 9;
    feh = parseFloat(feh.toFixed(2));
    return feh;
}

function ctof(cel) {
    cel = 1.8 * cel;
    cel += 32;
    cel = parseFloat(cel.toFixed(2));
    return cel;
}


function ctok(cel) {
    cel += 273.15;
    cel = parseFloat(cel.toFixed(2));
    return cel;
}


function ctokel(cel) {
    cel += 273.15;
    cel = parseFloat(cel.toFixed(2));
    return cel;
}


function ktoc(kel) {
    kel -= 273.15;
    kel = parseFloat(kel.toFixed(2));
    return kel;
}

function ftok(fah) {
    fah = ftoc(fah);
    fah += 273.15;
    fah = parseFloat(fah.toFixed(2));
    return fah;
}


function ktof(kel) {
    kel -= 273.15;
    kel = ctof(kel);
    kel = parseFloat(kel.toFixed(2));
    return kel;
}









// FUNCTION THAT RUNS ON CLICKING CONVERT
function convert() {
    let userinput, temp, calresult;
    userinput = document.getElementById("userinput");

    // CONVERT INPUT INTO NUMBER FROM ITS DEFAULT TYPE (STRING)
    userinput = parseFloat(userinput.value);
    
    result = document.getElementById("resulttext");

    // IF NOT RADIO IS CHECKED
    if (!celtofah.checked && !celtokel.checked && !fahtokel.checked) {

        // NO RADIO BUTTON IS CHECKED 
        console.log("Invalid input");
        calresult = "Invalid input ❌";
        result.textContent = calresult



    }

    // IF NO INPUT IS GIVEN
    else if (userinput == NaN) {
        console.log("NAN triggred");
        calresult = "Invalid input ❌";
        result.textContent = calresult
        // NO RADIO BUTTON IS CHECKED 
        console.log("Invalid input")

    }


    else {

        // STORING USERINPUT


        // CHECKING IF REVERSE BOX IS CLICKED
        if (checkbox.checked) {

            console.log("checked");

            // IF CEL TO FAH IS SELECTED
            if (celtofah.checked) {
                // VALUE WILL BE CONVERTED FROM FAH TO CEL

                // console.log("fah to cel");
                // console.log(userinput);

                temp = ftoc(userinput);
                result.textContent = `${temp}°C`;



            }

            else if (celtokel.checked) {
                // KEL TO CEL
                // console.log("Kel to Cel")
                // console.log(userinput)
                temp = ktoc(userinput);
                result.textContent = `${temp}°C`;
            }

            else {
                // kel to feh
                // console.log("feh to kel")
                temp = ktof(userinput);
                result.textContent = `${temp}°F`;
            }



        }
        else {
            // REVERSE **NOT** CHECKED
            // console.log("NOTchecked")


            if (celtofah.checked) {
                // CEL TO FAH

                // console.log("cel to fah")
                // console.log(userinput)
                temp = ctof(userinput);
                result.textContent = `${temp}°F`;
            }
            else if (celtokel.checked) {
                // CEL TO KEL
                // console.log("cel to kel")
                temp = ctok(userinput);
                result.textContent = `${temp}°K`;
            }
            else {
                // FAH TO KEL
                // console.log("fah to kel")
                // console.log(userinput)
                temp = ftok(userinput);
                result.textContent = `${temp}°K`;
            }

        }
    }
}


