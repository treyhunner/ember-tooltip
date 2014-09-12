import startApp from '../helpers/start-app';
import { test } from 'ember-qunit';
var App;

module('Tooltip', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Em.run(App, App.destroy);
  }
});

// These tests manually make the tooltip appear. Not really much of a test.
// I'm open to suggestions

test("Top left", function() {
  expect(2);
  visit('/');
  var selector = ".ember-tooltip.top.left .tip";
  andThen(function() {
    ok(!find(selector).is(':visible'), "Tip invisible");
    Em.$(selector).parent().mouseenter(function() {
      find(selector).css({display: 'block', opacity:1, 'z-index': 50});
    });
    Em.$(selector).parent().trigger('mouseenter');
  });
  andThen(function() {
    ok(find(selector).is(':visible'), "Tip visible");
  });
});

test("Top right", function() {
  expect(2);
  visit('/');
  var selector = ".ember-tooltip.top.right .tip";
  andThen(function() {
    ok(!find(selector).is(':visible'), "Tip invisible");
    Em.$(selector).parent().mouseenter(function() {
      find(selector).css({display: 'block', opacity:1, 'z-index': 50});
    });
    Em.$(selector).parent().trigger('mouseenter');
  });
  andThen(function() {
    ok(find(selector).is(':visible'), "Tip visible");
  });
});

test("Bottom left", function() {
  expect(2);
  visit('/');
  var selector = ".ember-tooltip.bottom.left .tip";
  andThen(function() {
    ok(!find(selector).is(':visible'), "Tip invisible");
    Em.$(selector).parent().mouseenter(function() {
      find(selector).css({display: 'block', opacity:1, 'z-index': 50});
    });
    Em.$(selector).parent().trigger('mouseenter');
  });
  andThen(function() {
    ok(find(selector).is(':visible'), "Tip visible");
  });
});

test("Bottom right", function() {
  expect(2);
  visit('/');
  var selector = ".ember-tooltip.bottom.right .tip";
  andThen(function() {
    ok(!find(selector).is(':visible'), "Tip invisible");
    Em.$(selector).parent().mouseenter(function() {
      find(selector).css({display: 'block', opacity:1, 'z-index': 50});
    });
    Em.$(selector).parent().trigger('mouseenter');
  });
  andThen(function() {
    ok(find(selector).is(':visible'), "Tip visible");
  });
});
