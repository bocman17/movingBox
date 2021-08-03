let myBox = document.querySelector(".box")

let newLeft = null;
let newTop = null;
document.querySelector("body").addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") {
        newLeft = newLeft - 10
        myBox.style.left = newLeft + "px"
    } else if (e.key === "ArrowRight") {
        newLeft = newLeft + 10
        myBox.style.left = newLeft + "px"
    } else if (e.key === "ArrowDown") {
        newTop = newTop + 10
        myBox.style.top = newTop + "px"
    } else if (e.key === "ArrowUp") {
        newTop = newTop - 10
        myBox.style.top = newTop + "px"
    }
})