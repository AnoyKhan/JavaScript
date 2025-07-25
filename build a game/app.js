let boxs = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turn0= true;

const winningPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const ResetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide");
    EnabledBoxs();
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

    });

});

const DisabledBoxs = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const EnabledBoxs = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    DisabledBoxs();
};

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}


newGameBtn.addEventListener("click", ResetGame);
resetButton.addEventListener("click", ResetGame);
