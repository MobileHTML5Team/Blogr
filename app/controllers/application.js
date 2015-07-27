import Ember from 'ember';

/**
 * Application Main Controller.
 * @class ApplicationController
 * @constructor
 */
export default Ember.Controller.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Aplication controller',

    /**
     * Save main information after user create a session.
     *
     * @type {Object}
    */
    user: null,

    /**
     * Save before transition.
     *
     * @type {Object}
    */
    transition: null
});
