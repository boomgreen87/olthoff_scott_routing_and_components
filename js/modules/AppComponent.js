export default {
    template: `
        <section>
            <h1>This is the app page.</h1>

            <form id="my-form">
                <label for="name">Username: </label>
                <input v-model="user" type="text" name="username" required placeholder="Username"><br>

                <label for="password">Password: </label>
                <input v-model="password" type="text" name="password" required placeholder="Password"><br>

                <input @click.prevent="submitUserData" type="submit" value="Sign Up / Log In">
            </form>
        </section>
    `,

    data: function() {
        return {
            user: "",
            password: ""
        }
    },

    methods: {
        submitUserData() {
            // Do a fetch here using the POST method
            // Refer to the Node Mailer example from last semester as to how to get data fom a form
            // Into a Fetch call using POST
            console.log('Hit the API Pan is asking for, which should be in the root Vue instance');

            // Reset the form on the page
            document.querySelector('form').reset();

            // Reset the username and password data in our app
            this.user = "";
            this.password = "";
        }
    },

    created: function() {
        console.log("Our app component rendered.")
    },
};