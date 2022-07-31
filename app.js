//Configure the root component.
//Register globals for all vue components.
const app = Vue.createApp({
    //data attribute in basic structure for Vue.js.
    data: function () {
        //Needs to return an object (contains: Key & Value) in {}.
        return {
            submissions: submissions // From seed.js file & without a $-decklaration!
        }
    },
    methods: {
        //Arrow functions do not work, because they alway grip the parent component.
        // upvote: () =>{
        //     console.log(this);
        // },

        /**Usual function notation
         * upvote: function () {}*/

        upvote() {
            // console.log(infoText);
            // console.log(event);
            this.submissions[0].votes++;
        },
        logConsole(text) {
            console.log(text);
        }

    }

});

// vm = vue model;
//Returns / creates the root instance.
const vm = app.mount('#app');