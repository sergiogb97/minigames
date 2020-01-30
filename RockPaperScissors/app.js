let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

function converChoice(char) {
  if (char == 'r') return "rock";
  if (char == 'p') return "paper";
  return ("scissors");
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(userChoice, compChoice) {
  const smallUser = "user".sub();
  const smallComp = "comp".sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalizeFirst(converChoice(userChoice))}${smallUser} beats ${converChoice(compChoice)}${smallComp}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, compChoice) {
  const smallUser = "user".sub();
  const smallComp = "comp".sub();
  const userChoice_div = document.getElementById(userChoice);

  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${capitalizeFirst(converChoice(userChoice))}${smallUser} loses to ${converChoice(compChoice)}${smallComp}. You lose...`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, compChoice) {
  const smallUser = "user".sub();
  const smallComp = "comp".sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${capitalizeFirst(converChoice(userChoice))}${smallUser} equals ${converChoice(compChoice)}${smallComp}. It's a draw`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const compChoice = getCompChoice();

  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice, compChoice);
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
