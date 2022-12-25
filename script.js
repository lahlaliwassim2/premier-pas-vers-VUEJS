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