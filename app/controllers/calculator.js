import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        add() {
            let { number1, number2 } = this.getProperties('number1', 'number2');
            if (number1 == null || number2 == null) {
                document.getElementById('error').innerHTML = 'Please write the two numbers';
            } else if (Math.abs(number1) > 1000 || Math.abs(number2) > 1000) {
                document.getElementById('error').innerHTML = 'Numbers should be between -1000 and 1000';
            } else {
                var result = parseInt(number1) + parseInt(number2);
                document.getElementById('error').innerHTML = '';
                document.getElementById('result').innerHTML = result;
            }
        },
        subtract() {
            let { number1, number2 } = this.getProperties('number1', 'number2');
            if (number1 == null || number2 == null) {
                document.getElementById('error').innerHTML = 'Please write the two numbers';
            } else if (Math.abs(number1) > 1000 || Math.abs(number2) > 1000) {
                document.getElementById('error').innerHTML = 'Numbers should be between -1000 and 1000';
            } else {
                var result = parseInt(number1) - parseInt(number2);
                document.getElementById('error').innerHTML = '';
                document.getElementById('result').innerHTML = result;
            }
        }
    }
});
