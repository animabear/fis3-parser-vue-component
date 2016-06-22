define('src/component/b.vue', function(require, exports, module) {

  'use strict';
  
  module.exports = {
    created: function created() {
      console.log('component b created !');
    },
  
    methods: {
      hello: function hello() {
        alert('hello!');
      }
    }
  };
  module && module.exports && (module.exports.template = "<div class=\"component-b\">\n  Component B <a href=\"javascript:;\" @click=\"hello\">Click Me</a>\n</div>");
  
  exports && exports["default"] && (exports["default"].template = "<div class=\"component-b\">\n  Component B <a href=\"javascript:;\" @click=\"hello\">Click Me</a>\n</div>");

});
