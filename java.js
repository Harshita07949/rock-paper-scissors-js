let userscore=0;
let cscore=0;
let choices=document.querySelectorAll(".choice");
let msz=document.querySelector("#msz");
let uscore=document.querySelector("#userscore");
let compscore=document.querySelector("#cscore");
const gencchoice=()=>{
    const options=['rock','paper','scissors'];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msz.innerText="Game was Draw. Play Again";
     msz.style.backgroundColor="coral";
}
const showwinner=(userwin,userchoice,cchoice)=>{
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        msz.innerText=`Congrats! You Win, ${userchoice} beats ${cchoice} `;
        msz.style.backgroundColor="green";
    }else{
        cscore++;
        compscore.innerText=cscore;

        msz.innerText=`Sry! You lost, ${cchoice} beats ${userchoice} `;
        msz.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user-choice:",userchoice);
    const cchoice=gencchoice();
     console.log("computer-choice:",cchoice);
     if(userchoice===cchoice){
        drawgame();
     }else{
       let userwin=true;
        if(userchoice==="rock"){
             userwin= cchoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            userwin=cchoice==="scissors"? false:true;
        }else{
            userwin=cchoice==="rock"? false:true;
        }
        showwinner(userwin,userchoice,cchoice);
     }

}



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    })

})