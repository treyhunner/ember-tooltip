module.exports = {
  name: 'ember-cli-tooltip',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/tooltip.css');
  }
};
