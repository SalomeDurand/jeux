    // générer un nombre au hasard
    const randomNumber = Math.floor(Math.random() * 10)

    const success = document.getElementById("check")
    const replay = document.getElementById("replay")
    const start = document.getElementById("start")
    const input = document.getElementById("numberUser")
    const body = document.querySelector("body")

    // fonction start
    start.addEventListener("click", () => {
        start.style.display = "none"
        input.style.display = "block"
        })

    // pour que le formulaire puisse être détecté après entrée
    const formUser = document.getElementById("formUser")
    formUser.addEventListener("submit", function (e) {
        e.preventDefault()

    // jouer effets sonores
        const audioError = document.getElementById("audioError")
        const audioSuccess = document.getElementById("audioSuccess")
        function playAudioError() { 
            audioError.play(); 
            }
        function playAudioSuccess() { 
            audioSuccess.play() 
            }

        // détecter la valeur du formulaire    
        const userValue = parseInt(input.value)

        // comparaison du nombre généré et du nombre choisi par le joueur
        if (randomNumber !== userValue) {
            input.value=""           // réinitialiser la valeur de l'input sans supprimer la valeur précédemment entrée
            input.classList.add("animate__animated", "animate__bounce")   // ajouter un effet lors de l'erreur
            setTimeout(function () {                                // enlever l'effet pour qu'il puisse se répéter
                input.classList.remove("animate__animated", "animate__bounce")
            }, 1000)
            playAudioError()
            body.classList.add("error") // changer la couleur de l'élément lorsque l'utilisateur a faux
        }
        // faire disparaître l'input et appraître l'icône succès avec animation + replay
        else {
            input.remove()
            playAudioSuccess()
            success.style.display = "block"
            success.classList.add("animate__animated", "animate__heartBeat")
            replay.style.display = "block"
            body.classList.remove("error")
            replay.addEventListener("click", () => {
                location.reload()
                })
        }    
})

