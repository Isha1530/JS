let boxes = document.querySelectorAll('.box');
let rbtn = document.querySelector('.rbtn');
let newbtn = document.querySelector('#new-btn');
let msgcon = document.querySelector('.msg-con');
let msg = document.querySelector('#msg');

let turn0 = true;


let winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcon.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        
    if (turn0) {
        box.innerText = "O";
        turn0 = false;
    } else {
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkWin();
    });
});

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText=`Player ${winner} wins!`;
    msgcon.classList.remove('hide');
    disabledboxes();
}
const checkWin = () => {
    for(patten of winpatterns) {
        let p1 = boxes[patten[0]].innerText;
        let p2 = boxes[patten[1]].innerText;
        let p3 = boxes[patten[2]].innerText;

       if(p1 != "" &&  p2 != "" && p3 != "")
       {
            if(p1 === p2 && p2 === p3) {
                showwinner(p1);
            }
        }
    }
}

newbtn.addEventListener('click', resetGame);
rbtn.addEventListener('click', resetGame);