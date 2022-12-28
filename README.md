# premier-pas-vers-VUEJS
VUEJS est un framework évolutif pour construire des interfaces utilisateur. À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale . Le cœur de la bibliothèque se concentre uniquement sur la partie vue, et il est vraiment simple de l’intégrer avec d’autres bibliothèques ou projets existants. D’un autre côté, Vue est tout à fait capable de faire tourner des applications web monopages quand il est couplé avec des outils modernes et des bibliothèques complémentaires.


1--instance Vue :

    new Vue ({
        el:'#app',

    })

2--DATA & METHODS 

    new Vue ({
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
    })

3--DATA Binding </br>
----------script.js

    new Vue ({
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
    })

-----------index.html

    <!DOCTYPE html>
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
    </html>

4--Events in Vuesjs
---------index.html
  <form>
   <h1>{{conter}}</h1>
   <button @click="incriment(1)">incre(1)</button>
   <button @click="decriment(1)">decre(1)</button>
     
   <button v-on:click="incriment(5)">incre(5)</button>
   <button v-on:click="decriment(5)">decre(5)</button>
  </form>


------------------script : </br>
     methods : {
            // saySalam: function() {
            //     return `hello frinds I'm Wassim Lahlali `
            // }
            incriment : function(n){
                this.conter+=n;
            },
            decriment : function(n){
              this.conter-=n;
            }

        }

5--Events Modifiers


     <form action="">
            <input type="text">
            <button @click.prevent="add">add</button>
        </form>
        <a @click.prevent="add" href="https://github.com/lahlaliwassim2/">mon compte </a>``

6--Keys Events

     <input @keyup.enter="logName"  @keyup.alt.enter="add"  type="text">

7--Two Way DataBinding v-model

     <input  v-model="name" type="text">
        <input v-model="name" type="text">
        <span>{{ name }}</span>

8--Computed Propertie </br>
Les expressions dans le template sont très pratiques, mais elles sont uniquement destinées à des opérations simples. Mettre trop de logique dans vos templates peut les rendre trop verbeux et difficiles à maintenir par exemple : 

-----index.html
<hr>
     <div>
        <input v-model="num" type="text">
        <h>resultat =  {{ resultat }}</h>
        <h1>{{conter}}</h1>
        </div>
-----script.js
</br>
    methods : {
            resultat : function () {
            return this.conter * this.num
        }
    }
    }
le probleme ici que l exucution de fonction se repetent et si vous avez un bloque de code compliquée sa cause des probleme la solution se 'VUEJS' et ce qu on appelle 'COMPUTED' comme : 
</br>
-----index.html
<hr>
    (
     <input v-model="num" type="text">
        <h1>resultat =  {{ resultat }}</h1>
        <h1>{{conter}}</h1>
     )
-----script.js </br>

    computed : {
            resultat : function () {
            return this.conter * this.num
        }
    }
    }
resultat est appellé maintenant comme une variable et c est ça le secret
