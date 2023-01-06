// console.log("testing");

const tempFunc = () => {
    let temp = document.querySelector("#tempr");
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "rgb(255, 255, 255)";


    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "rgb(235, 231, 38)";
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "rgb(235, 231, 38)";
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "rgb(235, 231, 38)";
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red";
    }, 4000);
    
}

tempFunc();

setInterval(tempFunc, 5000)