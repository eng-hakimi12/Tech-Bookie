let iconButton = document.querySelector("#menu")
let ulElement = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let Button = document.querySelector("#close")


iconButton.addEventListener("click", function(){
    ulElement.style.display = "flex"
    buttons.style.display = "block"
    iconButton.style.display = "none"
    Button.style.display = "block"
})

Button.addEventListener("click", function(){
    ulElement.style.display = "none"
    buttons.style.display = "none"
    iconButton.style.display = "block"
    Button.style.display = "none"
})

