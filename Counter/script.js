// Counter function

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0

increaseBtn.onclick = function () {
    count++;
    document.getElementById("countLabel").textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    document.getElementById("countLabel").textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    document.getElementById("countLabel").textContent = count;
}