'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIDatepicker(project) {
  this.project = project;
  this.name    = 'Ember CLI Tooltip';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIDatepicker.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-tooltip', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIDatepicker.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIDatepicker;
