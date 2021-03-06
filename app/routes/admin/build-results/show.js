import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('test-result', params.id, {
      include: 'version,version.addon'
    });
  }
});
