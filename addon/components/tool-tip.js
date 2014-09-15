import Em from 'ember';

export default Em.Component.extend({
  tagName: 'h2',
  position: 'top left',
  classNameBindings: ['classes'],
  classes: function() {
    return 'ember-tooltip %@'.fmt(this.get('position'));
  }.property('position')
});
