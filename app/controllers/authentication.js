import Ember from 'ember';

export default Ember.Controller.extend({
    loginFailed: false,
    errorMessage: '',
    actions: {
        login: function() {
            var user = this.get('username');
            var pass = this.get('password');
            if(!user) {
                this.set('loginFailed', true);
                this.set('errorMessage', 'Insert your username please');
                return;
            }
            if(!pass) {
                this.set('loginFailed', true);
                this.set('errorMessage', 'Insert your password please');
                return;
            }
            var that = this;
            Ember.$.post( "http://blogr-api.herokuapp.com/login", {
                "username": user,
                "password": pass
            }).done( function(response) {
                var applicationCtrl = that.controllerFor('application');
                applicationCtrl.setProperties({
                    'isAuthenticated': true,
                    'username': user,
                    'user_id': response.user_id,
                    'session_id': response.session_id
                });
                var previousTransition = that.get('previousTransition');
                if (previousTransition) {
                    that.set('previousTransition', null);
                    previousTransition.retry();
                } else {
                    that.transitionToRoute('index');
                }
            }).fail( function() {
                that.set('loginFailed', true);
                that.set('errorMessage', 'Invalid credentials.');
            });
        }
    }
});
