for(var i = 0; i<document.querySelectorAll(".bat").length; i++){
    document.querySelectorAll(".bat")[i].addEventListener("click", function (){
        
        var botao = this.innerHTML
        façaSom(botao)
        animacao(botao)        
        

    })
    


}

document.addEventListener("keydown", function (event){
    façaSom(event.key)
    animacao(event.key)  
})

function façaSom(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            
            break   
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()

            break
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            break
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
            break
        case "j":
            var audio = new Audio("sounds/caixa.mp3")
            audio.play()
            break
        case "k":
            var audio = new Audio("sounds/prato.mp3")
            audio.play()
            break
        case "l":
            var audio = new Audio("sounds/bumbo.mp3")
            audio.play()
            break



        default: console.log(botao)
    }
}

function animacao(currentKey){
    var botaoAtivo = document.querySelector("." + currentKey)
    botaoAtivo.classList.add("pressionado")
    setTimeout(function(){
        botaoAtivo.classList.remove("pressionado")
    }, 100)
}