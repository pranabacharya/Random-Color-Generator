const container = document.querySelector(".container");

const generateRandomHex = () => {
    const chars = "0123456789abcdef";
    const lengthOfHex = 6;
    let hexCode = "";
    for(let i = 0; i < lengthOfHex; i++){
        const random = Math.floor(Math.random()*chars.length);
        hexCode += chars[random];
    }
    return "#"+hexCode;
}


for(let i = 0; i < 30; i++){
    let div = document.createElement("div");
    div.classList.add("color-container");
    div.style.backgroundColor = generateRandomHex();
    let spanOfColorName = document.createElement("span");
    spanOfColorName.innerText = generateRandomHex();
    spanOfColorName.classList.add("color-code")
    div.appendChild(spanOfColorName);
    container.appendChild(div);
}
let allColorCodes = document.querySelectorAll(".color-code");
allColorCodes.forEach((colorCode)=> {
    colorCode.addEventListener("click", (e)=> {
        //i can add a click to copy the hexCode 
        console.log(e.target.innerText);
    })
})

