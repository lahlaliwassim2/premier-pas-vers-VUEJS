# premier-pas-vers-VUEJS
VUEJS est un framework évolutif pour construire des interfaces utilisateur. À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale . Le cœur de la bibliothèque se concentre uniquement sur la partie vue, et il est vraiment simple de l’intégrer avec d’autres bibliothèques ou projets existants. D’un autre côté, Vue est tout à fait capable de faire tourner des applications web monopages quand il est couplé avec des outils modernes et des bibliothèques complémentaires.


1--instance Vue :
``new Vue ({
    el:'#app',
   
})``

""
2--DATA & METHODS
``new Vue ({
    el:'#app',
    data : {
        message: "hello hello",
        input: "valeure de l input",
        
    },
    methods : {
        saySalam: function() {
            return `hello frinds I'm Wassim Lahlali `
        }
    }
})``
3--DATA Binding 
    -script.js
``new Vue ({
    el:'#app',
    data : {
        message: "hello hello",
        input: "valeure de l input",
        image: "https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        github:"<a href='https://github.com/lahlaliwassim2'>mon compte sur Github</a>"
    },
    methods : {
        saySalam: function() {
            return `hello frinds I'm Wassim Lahlali `
        }
    }
})``

index.html
``<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.js"></script>
    <title>Premier Pas vers VUEJS</title>
</head>
<body>
    <div id="app">
        {{ message }}    
        {{ saySalam() }}
        <img v-bind:src="image" alt="">
        <input type="text" :value="input">

        <span v-html="github"></span>
    </div>
    <script src="script.js"></script>
</body>
</html>``
