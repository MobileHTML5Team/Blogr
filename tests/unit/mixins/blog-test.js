import Ember from 'ember';
import BlogMixin from '../../../mixins/blog';
import { module, test } from 'qunit';

module('Unit | Mixin | blog');

// Replace this with your real tests.
test('it works', function(assert) {
  var BlogObject = Ember.Object.extend(BlogMixin);
  var subject = BlogObject.create();
  assert.ok(subject);
});
