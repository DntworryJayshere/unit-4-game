$(document).ready(function () {

    //Global variables
    //====================================================================================== 

    //score variables
    var ranNum;
    var totalScore;

    //crystal variables
    var gem = {
        rubyNum: {
            name: "ruby",
            value: 0
        },
        diamondNum: {
            name: "diamond",
            value: 0
        },
        emeraldNum: {
            name: "emerald",
            value: 0
        },
        saffireNum: {
            name: "saffire",
            value: 0
        }
    }

    // total win and losses
    var winsCounter = 0;
    var lossesCounter = 0;

    //functions
    //====================================================================================== 

    //function to generate random numbers
    var generateRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //function to start and restart the game
    function startGame() {

        //sets a new random number goal
        ranNum = generateRandom(19, 120);

        //resets the total score to zero
        totalScore = 0;

        //sets a new random number for all of the crystals
        gem.rubyNum.value = generateRandom(1, 12);
        gem.diamondNum.value = generateRandom(1, 12);
        gem.emeraldNum.value = generateRandom(1, 12);
        gem.saffireNum.value = generateRandom(1, 12);

        //change the html to reflect these changes
        $("#random-number").text(ranNum);
        $("#total-score").text(totalScore);

        //push the random number to the total score & display random number selected
        console.log("ran" + ranNum);
        console.log("ruby" + gem.rubyNum.value);
        console.log("diamon" + gem.diamondNum.value);
        console.log("emerald" + gem.emeraldNum.value);
        console.log("saffire" + gem.saffireNum.value);

    }

    var checkWin = function () {

        // Check if totalScore is larger than randomNum
        if (totalScore > ranNum) {
            alert("Sorry. You lost!");
            console.log("You Lost");

            // Add to Loss Counter
            lossesCounter++;

            // Change Loss Count HTML
            $("#losses").text(lossesCounter);

            // Restart the game
            startGame();
        }

        else if (totalScore === ranNum) {
            alert("Congratulations! You Won!");
            console.log("You Won!");

            // Add to the Win Counter
            winsCounter++;

            // Change Win Count HTML
            $("#wins").text(winsCounter);

            // Restart the game
            startGame();
        }
    };

    var addValues = function (clickedGem) {

        totalScore += clickedgem.value;
        $("#total-score").text(totalScore)

        checkWin();

        console.log("total Score: " + totalScore);
    };

    // MAIN PROCESS
    // =================================================================

    // Starts the Game the First Time.

    $("#start-game").click(function () {
        startGame();
        //add css to #start-game display = none; display show at the end of the game boolean
        console.log("game is starting")
    })

    $("#ruby-image").click(function () {
        addValues(gem.rubyNum);
    });

    $("#diamond-image").click(function () {
        addValues(gem.diamondNum);
    });

    $("#emerald-image").click(function () {
        addValues(gem.emeraldNum);
    });

    $("#saffire-image").click(function () {
        addValues(gem.saffireNum);
    });

})