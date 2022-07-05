var w = '';
var cross = true;
var div = document.getElementsByTagName("div");
var turn = document.getElementById("turn");
var button = document.getElementById("clear");
var div_arr = [];

for (let i = 0; i < div.length; i++) {
    div[i].setAttribute("id", `field-${i}`);
    div[i].setAttribute("onclick", `addXAndO(${i})`);
    div_arr[i] = `field-${i}`; // Array with values in fields
}

function addXAndO(field) {
    let dField = document.getElementById(div_arr[field]);
    if (cross) {
        dField.innerText = 'X';
        turn.innerText = "Turn: O";
        dField.removeAttribute("onclick");
        w = 'X';
        cross = false;
        isWin();
    }
    else {
        dField.innerText = 'O';
        turn.innerText = "Turn: X";
        dField.removeAttribute("onclick");
        w = 'O';
        cross = true;
        isWin();
    }
    for (let i = 0; i < div.length; i++) {div[i].classList.remove("notnot");}
}

function isDraw() {
    for (let i = 0; i < div.length; i++) {div[i].classList.add("draw");}
    w = 'D';
    toShowWin();
}

function isWin() {
    if (div[0].innerText == w && div[1].innerText == w && div[2].innerText == w || // 1, 2, 3

        div[3].innerText == w && div[4].innerText == w && div[5].innerText == w || // 4, 5, 6

        div[6].innerText == w && div[7].innerText == w && div[8].innerText == w || // 7, 8, 9

        //////////////////////////////////////////////////////

        div[0].innerText == w && div[3].innerText == w && div[6].innerText == w || // 1, 4, 7

        div[1].innerText == w && div[4].innerText == w && div[7].innerText == w || // 2, 5, 8

        div[2].innerText == w && div[5].innerText == w && div[8].innerText == w || // 3, 6, 9

        //////////////////////////////////////////////////////

        div[0].innerText == w && div[4].innerText == w && div[8].innerText == w || // 1, 5, 9

        div[2].innerText == w && div[4].innerText == w && div[6].innerText == w ) // 3, 5, 7

        { toShowWin(); }

    else {
        if (div[0].innerText != "" &&  div[1].innerText != "" &&  div[2].innerText != "" 
        &&  div[3].innerText != "" &&  div[4].innerText != "" &&  div[5].innerText != "" 
        &&  div[6].innerText != "" &&  div[7].innerText != "" &&  div[8].innerText != "") {isDraw();}
    }
}

function toShowWin() {
    switch (w) {
        case 'X': 
            turn.innerText = "Win: X"; 
            for (let i = 0; i < div.length; i++) {
                if (div[i].innerText == 'X') {
                    div[i].classList.add("winner"); 
                }
            }
            break;

        case 'O': 
            turn.innerText = "Win: O"; 
            for (let i = 0; i < div.length; i++) {
                if (div[i].innerText == 'O') {
                    div[i].classList.add("winner"); 
                }
            }
            break;

        case 'D': turn.innerText = "DRAW"; break;
        default: return;
    }

    for (let i = 0; i < div.length; i++) {div[i].removeAttribute("onclick");}
}

button.addEventListener("click", ()=>{
    for (let i = 0; i < div.length; i++) {
        if (div[i].getAttribute != "onclick") {div[i].setAttribute("onclick", `addXAndO(${i})`);}
        div[i].innerText = "";
        turn.innerText = "Turn: X";
        if (w == 'D') {div[i].classList.remove("draw");}
        div[i].classList.add("notnot");
        div[i].classList.remove("winner");
        cross = true;
        w = '';
    }
});