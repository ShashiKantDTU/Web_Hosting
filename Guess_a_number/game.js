//  Genrate a random number 
let randnum, minvalue = 1, maxvalue, userinput, triesleft = 4; //since the click after loosing will be counted so tries 4 wil let user play 5 times 
let won = false;
maxvalue = 10;
randnum = Math.random();
randnum = (Math.floor(randnum * maxvalue) + 1);
console.log("Do not see console this is the answer: ",randnum);
document.getElementById("minmax").textContent = `${minvalue} and ${maxvalue}`;
document.getElementById("currentlevel").textContent = "Easy";









// SELECT GAME MODE

        //  Easy button press
        document.getElementById("easy").onclick = function () {
            console.log("Do not see console this is the answer: ",randnum);
        //    console .log("hello", randnum)  // check if button press works
            won = false;
            triesleft = 4
            for (let i = 1; i <= 10; i++) {
                document.getElementById(`p${i}`).textContent = "";
            }
            maxvalue = 10;
            document.getElementById("minmax").textContent = `${minvalue} and ${maxvalue}`;
            document.getElementById("currentlevel").textContent = "Easy";
            randnum = Math.random();
            randnum = (Math.floor(randnum * maxvalue) + 1);
            document.getElementById("message").textContent = "";
            document.getElementById("tries").textContent = "";
            
        }




        //  Meduim button press
        document.getElementById("medium").onclick = function () {
            console.log("Do not see console this is the answer: ",randnum);
            // console.log("medium", randnum)  // check if button press works
            won = false;
            triesleft = 4
            for (let i = 1; i <= 10; i++) {
                document.getElementById(`p${i}`).textContent = "";
            }
            maxvalue = 50;
            document.getElementById("minmax").textContent = `${minvalue} and ${maxvalue}`;
            document.getElementById("currentlevel").textContent = "Meduim";
            randnum = Math.random();
            randnum = (Math.floor(randnum * maxvalue) + 1);
            document.getElementById("message").textContent = "";
            document.getElementById("tries").textContent = "";
        }


        //  Hard button press
        document.getElementById("hard").onclick = function () {
            console.log("Do not see console this is the answer: ",randnum);
            // console.log("hard", randnum)  // check if button press works
            won = false;
            triesleft = 4
            for (let i = 1; i <= 10; i++) {
                document.getElementById(`p${i}`).textContent = "";
            }
            maxvalue = 500;
            document.getElementById("minmax").textContent = `${minvalue} and ${maxvalue}`;
            document.getElementById("currentlevel").textContent = "Hard";
            randnum = Math.random();
            randnum = (Math.floor(randnum * maxvalue) + 1);
            document.getElementById("message").textContent = "";
            document.getElementById("tries").textContent = "";
        }

// RESET BUTTON PRESS
            document.getElementById("reset").onclick = function () {
                randnum = Math.random();
                randnum = (Math.floor(randnum * maxvalue) + 1);
                console.log("Do not see console this is the answer: ",randnum);
                // console.log("reset", randnum)  // check if button press works
                won = false;
                triesleft = 4
                for (let i = 1; i <= 10; i++) {
                    document.getElementById(`p${i}`).textContent = "";
                }
                for (let j = 1; j <= 10; j++) {
                    document.getElementById(`q${j}`).textContent = "";
                }
                document.getElementById("minmax").textContent = `${minvalue} and ${maxvalue}`;
                
                document.getElementById("message").textContent = "";
                document.getElementById("tries").textContent = "";
                for(let i = 1;i<=10;i++){
                    document.getElementById(`p${i}`).textContent = "";
                }
            }


// SUBMIT PRESS (GAME START)

            document.getElementById("submit").onclick = function () {
                console.log("Do not see console this is the answer: ",randnum);
                // console.log("submit")
                // GAME OVER 
                if (triesleft < 1) {
                        document.getElementById("message").textContent = "You lost Press 'Restart' or Change level to play again";
                        document.getElementById("tries").textContent = `Answer was ${randnum}`;
                    // MAKE REMARK SAYS PRESS RESET TO TRY AGAIN 

                    for(let i=1;i<=10;i++){
                        document.getElementById(`p${i}`).textContent = "";
                    }
                }
                else {

                    //GAME OVER CONDITION NOT MEET
                    if ((randnum - Number(document.getElementById("numberinputfromuser").value)) > 0) {
                        triesleft -= 1;
                        document.getElementById(`p${5-triesleft}`).textContent = document.getElementById("numberinputfromuser").value;
                        
                        document.getElementById("message").textContent = "Guess is less than number";
                        document.getElementById("tries").textContent = `& Chances left: ${triesleft +1}`;

                    } else if ((randnum === Number(document.getElementById("numberinputfromuser").value))) {
                        // console.log("Awesome guess! you won")
                        document.getElementById("message").textContent = "Awesome guess! you won";
                        document.getElementById("tries").textContent = "";
                        won = true;
                    } else {
                        triesleft -=1;
                        document.getElementById(`q${5-triesleft}`).textContent = document.getElementById("numberinputfromuser").value;
                        document.getElementById("message").textContent = "Guess is higher than number";
                        document.getElementById("tries").textContent = `& Chances left: ${triesleft +1}`;
                    }

                    
                }
            }