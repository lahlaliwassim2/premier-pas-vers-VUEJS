new Vue ({
    el:'#app',
    data : {
        // message: "hello hello",
        // input: "valeure de l input",
        // image: "https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        // github:"<a href='https://github.com/lahlaliwassim2'>mon compte sur Github</a>"
        conter : 0 ,
        name : '',
        num :0 
    },
    methods : {
        // saySalam: function() {
        //     return `hello frinds I'm Wassim Lahlali `
        // }
        incriment : function(n){
            this.conter+=n;
        },
        decriment : function(n){
          this.conter-=n;
        },
        add: function() {
            alert("hello")
        },
        logName: function () {
            console.log("name is log ")
        },
        resultat : function () {
            return this.conter * this.num
        }

    },
    computed : {
        
    }
})