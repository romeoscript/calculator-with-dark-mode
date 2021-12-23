let result = document.getElementById("sult")
let containi = document.getElementById("contain")

function dark(){
    let btn = document.querySelector(".theme")
    let icon = document.querySelector(".icon")
    if(containi.classList.contains("contain")){
        icon.classList.replace("fa-moon-o","fa-sun-o")
        btn.style.background = "white"
        icon.style.color = "black"
        containi.classList.remove("contain")
        containi.classList.add("darky")


    }
    else{
        icon.classList.replace("fa-sun-o", "fa-moon-o")
        btn.style.background = "black"
        icon.style.color = "white"
        containi.classList.remove("darky")
        containi.classList.add("contain")

    }
}
let display =""
let allButtons = document.querySelectorAll(".contain>div>input[type='button']")
let values = []
for(let b = 0; b< allButtons.length; b++){
    allButtons[b].addEventListener("click",()=>{
        display+= allButtons[b].value
        values.push(allButtons[b].value)
        console.log(values)
    })

}
result.innerHTML = display

