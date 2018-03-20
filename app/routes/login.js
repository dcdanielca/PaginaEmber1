import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    logging: service(),
    beforeModel() {
        const lengthStorage = (this.get('logging')).get('users.length');

        if(lengthStorage > 0){
            this.transitionTo('home');
        } 
    },
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
