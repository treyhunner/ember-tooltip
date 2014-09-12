'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLITooltip(project) {
  this.project = project;
  this.name    = 'Ember CLI Tooltip';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLITooltip.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-tooltip', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLITooltip.prototype.included = function included(app) {
  this.app = app;
  this.app.import('bower_components/ember-cli-tooltip/styles/tooltip.css');
};

module.exports = EmberCLITooltip;
