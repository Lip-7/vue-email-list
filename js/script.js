const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getEmails(j) {
            const newArray = [];
            for (let i = j; i > 0; i--) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    this.emails.push(res.data.response)
                    console.log(res.data.response);
                });
            }
        },
    }
}).mount('#app');