import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            users: [{
                username: "daniel",
                password: "1234"
            }, {
                username: "varg",
                password: "0000"
            }, {
                username: "bart",
                password: "1111"
            }, {
                username: "corey",
                password: "2222"
            }, {
                username: "george",
                password: "3333"
            }]
        }
    },
});
