import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | events/view/exhibitors/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:events/view/exhibitors/list');
    assert.ok(route);
  });
});
