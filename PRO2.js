const h1 = document.createElement('h1');

const body = document.querySelector('body');

const main = document.querySelector('main');

h1.textContent = "Rock Paper Scissors"

body.appendChild(h1);



const template = `
<section>
    <h1 style="font-size: 32px">Rock Paper Scissors</h1>
    <h2> Wins: 0  </h2>
    <h2> Ties: 0 </h2>
    <h2> Losses: 0 </h2>
    <h3><button id="Rock">Rock</button> <button id="Paper">Paper</button> <button id="Scissor">Scissors</button></h3>

</seciton>
`;

body.innerHTML = template;

const randomNumber = Math.floor(Math.random * 3);

let computerChoice

if(randomNumber === 0){
    computerChoice = "r"
  }
  else if(randomNumber === 1){
    computerChoice = "p"
  }
  else{
    computerChoice = "s"
  }

const Rock =  document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissor");

Rock.addEventListener('click', responseToClick)

function responseToClick(){
  const userChoice = "r"

  if(userChoice === computerChoice){
      //its a tie
      const h2 = document.querySelector('h2');
      h2.textContent = "Ties:" + "1";
      body.appendChild(h2);
  }
  
   else if(userChoice === "r" && computerChoice === "s"){
      //a win
      const h2 = document.querySelector('h2');
      h2.textContent = "Wins:" + "1";
      body.appendChild(h2);
  }
    else{
      //a loss
      const h2 = document.querySelector('h2');
      h2.textContent ="Losses:" + "1";
      body.appendChild(h2);
    }
}

Paper.addEventListener('click', responseToClick2) 

function responseToClick2(){
  const userChoice = "p"

  if(userChoice === computerChoice ){
      //its a tie
      const h2 = document.querySelector('h2');
      h2.textContent = "Ties:" + "1";
      body.appendChild(h2);
  }
  
    else if(userChoice === "p" && computerChoice === "r"){
      //a win
      const h2 = document.querySelector('h2');
      h2.textContent = "Wins:" + "1";
      body.appendChild(h2);
  }
    else{
        //a loss
      const h2 = document.querySelector('h2');
      h2.textContent = "Losses:" + "1";
      body.appendChild(h2);
  }

}

Scissors.addEventListener('click', responseToClick3) 

function responseToClick3(){
  const userChoice = "s"

  if(userChoice === computerChoice ){
      //its a tie
      const h2 = document.querySelector('h2');
      h2.textContent = "Ties:" + "1";
      body.appendChild(h2);
  }
    else if(userChoice === "s" && computerChoice === "p"){
    //a win
    const h2 = document.querySelector('h2');
    h2.textContent = "Wins:" + "1";
    body.appendChild(h2);
  }
    else{
   //a loss
   const h2 = document.querySelector('h2');
   h2.textContent = "Losses:" + "1";
   body.appendChild(h2);
    }


}

