import Service from '@ember/service';

export default Service.extend({
    users: null,

    init() {
        this.set('users', []);
    },

    add(user) {
        this.get('users').pushObject(user);
        console.log(this.get('users'));
    },

    remove(user) {
        this.get('users').removeObject(user);
    },
});
