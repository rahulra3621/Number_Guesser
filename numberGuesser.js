let inp = document.getElementById("numIn");
let btn = document.getElementById("btn");
let msg = document.getElementById("message");
let bg = document.getElementById("container");
let arr = document.getElementById("arr");
let secret_num = Math.floor(Math.random() * 100) + 1;
let atmp = 1;
let inpArr = []
btn.addEventListener("click", () => {
    let inpVal = Number(inp.value);
    let li = document.createElement("li");
    if (Number(inpVal)==true){
        inpArr.push(inpVal);
    }
    if (inpVal < 1 || inpVal > 100) {
        msg.textContent = "Enter number between 1 to 100";
        msg.style.color = "red";
        bg.style.backgroundColor = "rgb(255, 183, 183)";
        bg.style.boxShadow = "0px 0px 5px red";
        inp.value = "";
        inp.focus();
        return
    }
    else if (inpVal == secret_num) {
        msg.textContent = `Correct Guess in ${atmp} Attempts`;
        btn.disabled = true;
        msg.style.color = "green";
        bg.style.backgroundColor = "rgb(125, 255, 134)";
        bg.style.boxShadow = "0px 0px 5px green";
        li.style.backgroundColor="green";
        li.style.color="white";
    }
    else if (inpVal > secret_num) {
        msg.textContent = "Too High!!!";
        atmp++;
        msg.style.color = "red";
        bg.style.backgroundColor = "rgb(255, 183, 183)";
        bg.style.boxShadow = "0px 0px 5px red";
        li.style.backgroundColor="blue";
        li.style.color="white";
    }
    else if (inpVal < secret_num) {
        msg.textContent = "Too Low!!!";
        atmp++;
        msg.style.color = "red";
        bg.style.backgroundColor = "rgb(255, 183, 183)";
        bg.style.boxShadow = "0px 0px 5px red";
        li.style.backgroundColor = "red";
        li.style.color="white";
    }
    inp.value = "";
    inp.focus();
    li.append(inpVal);
    arr.appendChild(li);
});
resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", () => {
    secret_num = Math.floor(Math.random() * 100) + 1;
    msg.style.color = "red";
    msg.textContent = "Reseted"
    btn.disabled = false;
    bg.style.backgroundColor = "transparent";
    bg.style.boxShadow = "0px 0px 5px green";
    atmp = 1;
    arr.innerHTML=""
});