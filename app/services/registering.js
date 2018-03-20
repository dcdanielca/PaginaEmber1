import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Service.extend({
    people: storageFor('people'),

    init() {
        this._super(...arguments);
    },

    add(person) {
        this.get('people').addObject(person);
    },
});
