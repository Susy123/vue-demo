require.config({
        baseUrl: "/scripts/lib",
        paths:{
            "vue":"vue",
            "text":"text",
            "css":"css"
        },
        waitSeconds: 15,
        map:{

        },
        urlArgs: "version=" + Date.now()
    });

require(["vue", '/components/button-counter/button-counter.vue.js'], function(Vue,buttonCounter) {

    var data = {
        message: 'vue+requirejs'
    };

    var methods = {

    };


    var app = new Vue({
        created: function(){
            console.log('app created');
        },
        el:"#app",
        data:data,
        methods:methods
    });

});