
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


function game(number_play){
    let player_score= 0;
    let computer_score= 0;
    for(let i=0; i <= number_play; i++){
        let results= play_round(player_selection("ROCK"),computer_choice());
        if(results===win()){
            player_score+=1
        }else if(results===lose()){
            computer_score+=1;
        }
    }
    if(player_score > computer_score){
        return "You won!!";
    }else {
       return "You lose!!";
    }
}


console.log(game(10))
