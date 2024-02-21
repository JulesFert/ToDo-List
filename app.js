let app = {

    inputValueApp : null,

    init: function() {
        console.log('init ok')

        // placement des écouteurs d'évènements

        // sur le bouton de validation
        const formElement = document.getElementById('form')
        formElement.addEventListener('submit', app.handleSubmit)
        
    },

    handleSubmit: function(e) {

        // lors du submit ---->


        // bloquage du chargement de la page
        e.preventDefault()

        // récupération de l'input texte
        const inputElement = document.getElementById('task')

        // récupération de la valeur de l'input texte
        let inputValue = inputElement.value

        app.inputValueApp = inputValue

        // condition en cas d'input vide
        if (inputValue === "") {

            // TODO :insérer code plus tard ici pour gérer ce cas 
            console.log('il faut écrire une tâche à l\'intérieur de l\'input !')
        } else {

            // l'input est remplit, on crée la tâche
            app.createTask(inputValue)
        }
    },

    createTask: function(inputValue) {

        // je vais chercher le conteneur de la tâche
        const liTask = document.getElementById('li-task')


        // je vais chercher le <li> à remplir
        const pElement = liTask.querySelector('p')

        // je vérifie s'il est rempli
        if (pElement.textContent === "" ) {

            // je rempli la tâche
            pElement.innerHTML = inputValue

            // je l'affiche 
            liTask.classList.remove('task-hidden')

            // remise de la valeur de l'input à zéro
            const inputElement = document.getElementById('task')
            inputElement.value = ""

        } else {
            
            // je clone la liTask existante
            const liTaskClone = liTask.cloneNode(true)

            // je vais chercher le <p> à l'intérieur
            const pElementClone = liTaskClone.querySelector('p')

            // je le remplit avec la valeur de l'input
            pElementClone.innerHTML = inputValue

            // je vais chercher la liste principale
            const listOfTasks = document.getElementsByClassName('template-list')

            // j'ajoute la nouvelle tâche à la suite
            listOfTasks[0].append(liTaskClone)

            // remise de la valeur de l'input à zéro
            const inputElement = document.getElementById('task')
            inputElement.value = ""
        }

        // sur les boutons
        const buttonsEdit = document.querySelectorAll('#li-task button')
        
        // placement d'un écouteur d'évènement sur chaque bouton
        for (i = 0; i < buttonsEdit.length; i++) {
            buttonsEdit[i].addEventListener('click', app.handleClickButton)
        }
       
    },

    handleClickButton: function(e) {

        // on vérifie quel est le bouton cliqué
        const classButton = e.srcElement.className.substring(0,3)

        if (classButton === "don") {
            // on a cliqué sur done
            console.log('on a clique sur done de la tâche : ' + e.srcElement.parentNode.querySelector('p').textContent)

            // on appelle la fonction adéquate
            app.doneTask()

        } else if (classButton === "edi") {
            // on a cliqué sur edit
            console.log('on a clique sur edit de la tâche : ' + e.srcElement.parentNode.querySelector('p').textContent)

            // on appelle la fonction adéquate
            app.editTask()

        } else if (classButton === "del") {
            // on a cliqué sur delete
            console.log('on a clique sur delete de la tâche : ' + e.srcElement.parentNode.querySelector('p').textContent)

            // on appelle la fonction adéquate
            app.deleteTask()
        }
    },

    doneTask: function() {
        console.log('doneTask')


    },

    editTask: function() {
        console.log('editTask')

        
    },

    deleteTask: function() {
        console.log('deleteTask')


    },
}

document.addEventListener('DOMContentLoaded', app.init)