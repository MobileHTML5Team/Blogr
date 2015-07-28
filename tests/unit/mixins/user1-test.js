import Ember from 'ember';
import User1Mixin from '../../../mixins/user1';
import { module, test } from 'qunit';

module('Unit | Mixin | user1');

// Replace this with your real tests.
test('it works', function(assert) {
  var User1Object = Ember.Object.extend(User1Mixin);
  var subject = User1Object.create();
  assert.ok(subject);
});
