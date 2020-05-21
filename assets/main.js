const Roll = document.querySelector(".Roll");
const Output = document.querySelector(".Output");


const Showrolls = document.querySelector(".ShowAllRolls");
const ShowAllRollsOutput = document.querySelector(".ShowAllRollsOutput");


let dicearray = [];
let parallelarray = [];
let sidenumbvar;
//var number = Math.floor(Math.random()*6 +1);//math floor makes integers


let CurrentRollNum = 0;
Roll.addEventListener("click", function () {
    let i = 0;
    let rollnumb = document.getElementById("inputvar").value; //gets value from input box
    let sidevar2 = document.getElementById("inputvar2").value;
    if (rollnumb > 100000 || rollnumb < 1) {
        Output.innerHTML = "Please Enter A number between 1 and 100000"
    }
    
    else if(sidevar2 > 100000 || sidevar2 < 1){
        alert("Please Enter a number between 1 and 100000 for the number of sides");
    }

    else {
        while (i < rollnumb) {
            dicearray.push(Math.floor(Math.random() * sidevar2 + 1))
            // parallelarray.push(i);
            i++;
        }
    }
    //console.log(dicearray);

    let index = 0;
    let total = 0;
    while (index < dicearray.length) {
        total = total + dicearray[index];
        index++;
        Output.innerHTML = "The total of the roll was " + total;
        console.log(index);
    }


})




Showrolls.addEventListener("click", function () {
    let i = 0;
    console.log(dicearray);
    let outputsting = "";
    while (i < dicearray.length) {
        outputsting = outputsting + (i + 1) + ". " + dicearray[i] + '<br/>';
        i++;
    }
    ShowAllRollsOutput.innerHTML = outputsting;
})

const reset = document.querySelector(".Reset")

reset.addEventListener("click", function () {
    Roll.innerHTML = "Roll!";
    Output.innerHTML = "Output";
    Showrolls.innerHTML = "Show All Rolls";
    reset.innerHTML = "Reset";
    ShowAllRollsOutput.innerHTML = "";
    dicearray = [];
})