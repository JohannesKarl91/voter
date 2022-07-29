//Configure the root component.
//Register globals for all vue components.
const app = Vue.createApp({
    //data attribute in basic structure for Vue.js.
    data: function () {
        //Needs to return an object (contains: Key & Value) in {}.
        return {
            submissions: submissions // From seed.js file & without a $-decklaration!
        }
    }

});

// vm = vue model;
//Returns / creates the root instance.
const vm = app.mount('#app');