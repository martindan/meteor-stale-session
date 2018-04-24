Package.describe({
  name:    'martindan:stale-session',
  summary: 'Stale session and session timeout handling for meteorjs',
  git:     "https://github.com/martindan/meteor-stale-session.git",
  version: "1.0.8"
});

Package.onUse(function(api) {
    api.use('accounts-base@1.0.0', ['client','server']);
    api.use('jquery@3.3.1', 'client');
    api.addFiles('client.js', 'client');
    api.addFiles('server.js', 'server');
});
