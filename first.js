let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgamebtn =document.querySelector(".new");
let msgcontainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//turn for player O and X
let turnO = true;
//2D array
const Winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [2,4,6]
]
boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        console.log("Box was clicked");
        if(turnO )     //player1
        {
            box.innerText ="O";
            turnO = false;
        }
        else{                 //player2
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true ;
        checkWinner();
    });
})
const resetGame = () =>
{
   turnO = true;
   enableBoxes();
   msgcontainer.classList.add("hide");
}
const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations!!!! Winner is ${winner}` ;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for( let pattern of Winpattern)
    {
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner" ,pos1val);
                showWinner(pos1val);
            }
        }
    
    }
 };
 newgamebtn.addEventListener("click" , resetGame);
 reset.addEventListener("click" , resetGame);