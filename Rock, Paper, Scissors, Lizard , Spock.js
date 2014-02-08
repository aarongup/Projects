//Aaron Gupta
//Game inspired by The Big Bang Theory
//Made entirely of JavsScript functions and if/elses



alert("Welcome to the rock-paper-lizard-spock game inspired by the show Big Bang Theory!");

var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
var computerChoice = Math.random();
if (computerChoice <= 0.2) {
	computerChoice = "rock";
} else if(computerChoice <= 0.4 && computerChoice > .2) {
	computerChoice = "paper";
} else if (computerChoice <= .6 && computerChoice > .4) {
	computerChoice = "scissors";
} else if (computerChoice <= .8 && computerChoice > 6) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

if (userChoice != "rock" , "paper" , "siccors", "lizard", "spock") {
    alert("Damn it, pick a right one!");
    userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
}

console.log("You have chosen " + userChoice);
console.log("Computer has chosen " + computerChoice)

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock crushes scissors! You win!";
        } else if (choice2 === "paper") {
            return "paper covers rock. Lol you lost";
        } else if (choice2 === "lizard") {
            return "rock crushes lizard! You win!";
        } else  {
            return "spock vaporizes rock. Trololol you lost";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper covers rock. You win!";
        } else if (choice2 == "scissors") {
            return "scissors cuts paper. You lose.";
        } else if (choice2 === "lizard") {
            return "lizard eats paper. You lose";
        } else {
            return "paper disproves spock. You win";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock crushes scissors. You lose";
        } else if (choice2 == "paper") {
            return "scissors cuts paper. You win.";
        } else if (choice2 === "lizard") {
            return "scissors decapitates lizard. You win";
        } else {
            return "spock smashes scissors. You lose";
        }
    }
    else if (choice1 === "lizard") {
        if (choice2 === "rock") {
            return "rock crushes lizard.You lose";
        } else if (choice2 == "paper") {
            return "lizard eats paper. You win.";
        } else if (choice2 === "scissors") {
            return "scissors decapitates lizard. You lose";
        } else {
            return "Lizard poisons spock. You win";
        }
    }
    else {
        if(choice2 == "rock") {
            return "spock vaporizes rock. You win";
        } else if(choice2 === "paper") {
            return "paper disproves spock.You lose";
        } else if(choice2 === "scissors") {
            return "spock smashes scissors. You win";
        } else  {
            return "lizard poisons spock. You lose";
        }
    }
}

compare(userChoice,computerChoice)
