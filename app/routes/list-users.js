import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    logging: service(),
    beforeModel() {
        if(this.get('logging').users.length == 0){
            this.transitionTo('login');
        } 
    },
});
