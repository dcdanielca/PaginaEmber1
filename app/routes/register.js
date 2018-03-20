import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    logging: service(),
    beforeModel() {
        const lengthStorage = (this.get('logging')).get('users.length');
        if(lengthStorage == 0){
            this.transitionTo('login');
        } 
    },
});
