var test = require('tap').test;
var vm = require('vm');
var browserify = require('../');

test('alt browser field file no ext (config option)', function (t) {
    t.plan(2);
    var b = browserify(__dirname + '/browser_field_file/xyz', { browser: 'chromeapp' })
      .bundle(function (err, src) {
          t.ifError(err);
          vm.runInNewContext(src, { console: { log: log } });
          function log (msg) { t.equal(msg, 'yum') }
      });
});

test('alt browser field file no ext (config method)', function (t) {
    t.plan(2);
    var b = browserify(__dirname + '/browser_field_file/xyz')
      .browser('chromeapp')
      .bundle(function (err, src) {
          t.ifError(err);
          vm.runInNewContext(src, { console: { log: log } });
          function log (msg) { t.equal(msg, 'yum') }
      });
});
