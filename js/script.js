$(document).ready(function () {

    // générer un nombre au hasard
    const randomNumber = Math.floor(Math.random() * 10)

    // pour que le formulaire puisse être détecté après entrée
    $("#formUser").on("submit", function (e) {
        e.preventDefault()
        const input = $("input[type=text]")

        const body = $("body")

        // détecter la valeur du formulaire    
        const userValue = parseInt($(input).val())

        // comparaison du nombre généré et du nombre choisi par le joueur
        if (randomNumber !== userValue) {
            input.val("")          // réinitialiser la valeur de l'input sans supprimer la valeur précédemment entrée
            input.addClass("animate__animated animate__bounce")   // ajouter un effet lors de l'erreur
            setTimeout(function () {                                // enlever l'effet pour qu'il puisse se répéter
                input.removeClass("animate__animated animate__bounce")
            }, 1000)

            body.addClass("error") // changer la couleur de l'élément lorsque l'utilisateur a faux
        }
        // faire disparaître l'input et appraître l'icône succès avec animation
        else {
            input.remove()
            $(".fa-circle-check").show()
            $(".fa-circle-check").addClass("animate__animated animate__heartBeat")
            body.removeClass("error")
        }
    })
})