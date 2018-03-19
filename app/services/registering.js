import Service from '@ember/service';

export default Service.extend({
    people: null,

    init() {
        this._super(...arguments);
        this.set('people', []);
    },

    add(person) {
        this.get('people').pushObject(person);
    },
});
