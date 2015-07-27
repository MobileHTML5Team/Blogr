import Ember from 'ember';

export default Ember.Controller.extend({
    transition: null,
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
                'username': user,
                'password': pass
            }).done( function(response) {
                localStorage.setItem('user_id', response.user_id);
                localStorage.setItem('session_id', response.session_id);
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('username', user);
                var previousTransition = that.get('transition');
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
