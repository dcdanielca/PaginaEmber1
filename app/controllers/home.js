import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    logging: service(),
    actions:{
        logout() {
            this.get('logging').remove();
            this.transitionToRoute('login');
        }
    }
});
