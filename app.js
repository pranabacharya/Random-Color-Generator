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


function generateUI(){
    for(let i = 0; i < 36; i++){
        let hexCodetoPrint = generateRandomHex();
        let div = document.createElement("div");
        div.classList.add("color-container");
        div.setAttribute("style", `background-color: ${hexCodetoPrint}`)
        let spanOfColorName = document.createElement("span");
        spanOfColorName.innerText = hexCodetoPrint;
        spanOfColorName.classList.add("color-code")
        div.appendChild(spanOfColorName);
        container.appendChild(div);
    }
}
generateUI();

let allColorCodes = document.querySelectorAll(".color-code");
allColorCodes.forEach((colorCode)=> {
    colorCode.addEventListener("click", (e)=> {
        //i can add a click to copy the hexCode 
        let textToCopy = e.target.innerText;
        let alertEl = document.querySelector(".alert-msg");
        alertEl.classList.remove("active-msg");
        alertEl.setAttribute("style", `background-color:${textToCopy}`);
        navigator.clipboard.writeText(textToCopy);
        alertEl.innerText = textToCopy + " copied!";
        setTimeout(()=> {
            alertEl.classList.add("active-msg");
        },2000)
    })
})

document.querySelector("#refresh").addEventListener("click", ()=> {
    //here i am deleting the old elements and pushing new elements to the ui
    let deleteItem = document.querySelectorAll(".color-container");
    deleteItem.forEach(item => item.remove());
    generateUI()
});