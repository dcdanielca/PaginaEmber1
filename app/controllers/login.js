import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    logging: service(),
    actions: {
        login() {
            let { username, password } = this.getProperties('username', 'password');
            const users = this.model.users;
            const user = users.findBy('username', username);

            //Comprobate login 
            if (user != null && user.password == password) {
                this.get('logging').add(user);
                this.transitionToRoute('home');
            } else {
                document.getElementById('error').innerHTML = 'Username or password invalid';
                document.getElementById('password').value = '';
            }
        }
    },
});
