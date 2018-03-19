import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    registering : service(), 
    selectedGender: null,
    actions: {
        setGender: function (selected) {
            this.set('selectedGender', selected);
        },
        register() {
            let {name, salary } = this.getProperties('name', 'salary');

            const people = this.get('registering').people;
            const personSearch = people.findBy('name', name);
            if (personSearch != null) {
                document.getElementById('message').innerHTML = '';
                document.getElementById('error').innerHTML = '';
                document.getElementById('error').innerHTML = 'The person already exists';
            } else if (salary < 0) {
                document.getElementById('message').innerHTML = '';
                document.getElementById('error').innerHTML = '';
                document.getElementById('error').innerHTML = 'The salary should be greater than 0';
            } else {
                const person = {
                    'name': name,
                    'salary': salary,
                    'gender': this.get('selectedGender'),
                };
                this.get('registering').add(person);
                document.getElementById('error').innerHTML = '';
                document.getElementById('message').innerHTML = '';
                document.getElementById('message').innerHTML = 'Person registered successfully';
                document.getElementById('name').value = '';
                document.getElementById('salary').value = '';

            }
        }
    }
});
