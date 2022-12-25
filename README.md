# premier-pas-vers-VUEJS
VUEJS est un framework évolutif pour construire des interfaces utilisateur. À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale . Le cœur de la bibliothèque se concentre uniquement sur la partie vue, et il est vraiment simple de l’intégrer avec d’autres bibliothèques ou projets existants. D’un autre côté, Vue est tout à fait capable de faire tourner des applications web monopages quand il est couplé avec des outils modernes et des bibliothèques complémentaires.


---"DATA & METHODES"
(SCRIPT.js)

`new Vue ({
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
})`