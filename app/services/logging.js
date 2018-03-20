import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Service.extend({
    users: storageFor('users'),
    init() {
        this._super(...arguments);
    },

    add(user) {
        this.get('users').addObject(user);
    },

    remove() {
        this.get('users').clear();
    },
});
