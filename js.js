
//writing a function to randomly return either ROCK, PAPER ,SCISSORS
function computer_choice(){
    let choices= ["ROCK","PAPER","SCISSORS"];
    let computer_choice= Math.floor(Math.random()*choices.length);
    return choices[computer_choice];
}

//writing a function that allows the user to make a choice between
// ROCK, PAPER, SCISSORS
function player_selection(choice){
    let my_choice= choice.toUpperCase();
    return my_choice;
}

// Win function 
function win(){
    let out_come= " you won !"
    return out_come;
}

// Lose function 
function lose(){
    let out_come= "You lose !!"
    return out_come;
}

// DRAW ODDS
function draw(){
    let out_come= " You draw!"
    return out_come;
}


//writing a function that allows two users to play , the player and the computer 
function play_round(player, computer_play){

    //check for player wins only
    if(player==="ROCK" && computer_play==="SCISSORS"){
        return win();
    }

    if(player==="SCISSORS" && computer_play==="PAPER"){
        return win();
    }

    if(player==="PAPER" && computer_play==="ROCK"){
        return win();
    }

    //check for player lose only
    if(player==="SCISSORS" && computer_play==="ROCK"){
        return lose();
    }

    if(player==="PAPER" && computer_play==="SCISSORS"){
        return lose();
    }

    if(player==="ROCK" && computer_play==="PAPER"){
        return lose();
    }

    //DRAW ODDS OR DRAW 
    if(computer_play==="ROCK" && player==="ROCK"){
        let= out_come= draw();
        return out_come;
    }

    if(computer_play==="SCISSORS" && player==="SCISSORS"){
        return lose();
    }

    if(computer_play==="PAPER" && player==="PAPER"){
        return lose();
    }

    else{
        return draw();
    }

}



const play_buttons= document.querySelector(".play_buttons");
const paper_button= document.createElement("button");
const rock_button= document.createElement("button");
const scissors_button= document.createElement("button");
play_buttons.appendChild(paper_button);
play_buttons.appendChild(rock_button);
play_buttons.append(scissors_button);

paper_button.textContent= "PAPER";
rock_button.textContent= "ROCK";
scissors_button.textContent= "SCISSORS";


const display_results= document.createElement("p");
play_buttons.appendChild(display_results);



let computer_score = 0;
let player_score = 0;



function updateScore() {
    if (player_score === 5) {
      display_results.textContent = "You won!!! Total score=" + player_score;
      display_results.classList.remove('lose');
      display_results.classList.add('win');
      resetScores();
    } else if (computer_score === 5) {
      display_results.textContent = "You lose!!! Total score=" + computer_score;
      display_results.classList.remove('win');
      display_results.classList.add('lose');
      resetScores();
    } else {
      display_results.textContent = "Your SCORE : " + player_score + " Computer SCORE: " + computer_score;
      display_results.classList.remove('win', 'lose');
    }
  };
  

paper_button.addEventListener("click", function() {
  if (play_round(player_selection("paper"), computer_choice()) === win()) {
    player_score = player_score + 1;
  } else if (play_round(player_selection("paper"), computer_choice()) === lose()) {
    computer_score = computer_score + 1;
  }
  updateScore();
});

rock_button.addEventListener("click", function() {
  if (play_round(player_selection("rock"), computer_choice()) === win()) {
    player_score += 1;
  } else if (play_round(player_selection("rock"), computer_choice()) === lose()) {
    computer_score += 1;
  }
  updateScore();
});

scissors_button.addEventListener("click", function() {
  if (play_round(player_selection("scissors"), computer_choice()) === win()) {
    player_score += 1;
  } else if (play_round(player_selection("scissors"), computer_choice()) === lose()) {
    computer_score += 1;
  }
  updateScore();
});

// Reset scores if the game ends
function resetScores() {
  computer_score = 0;
  player_score = 0;
};


