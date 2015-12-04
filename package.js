Package.describe({
  name: 'dpankros:zeromq',
  version: '2.14.0',
  // Brief, one-line summary of the package.
  summary: 'ZeroMq for meteor',
  git: 'https://github.com/dpankros/meteor-zeromq.git',
  documentation: 'README.md'
});

Npm.depends({ "zmq": "2.14.0" });

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  if (api.export) api.export('ZeroMQ');
  api.use('ecmascript');
  api.addFiles('zeromq.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dpankros:zeromq');
  api.addFiles('zeromq-tests.js');
});
