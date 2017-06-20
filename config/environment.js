/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'nduthis',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyDY97tdvjz7u-59EBWjwtOjLwDFWtaXXA0",
      authDomain: "nduthis-24c17.firebaseapp.com",
      databaseURL: "https://nduthis-24c17.firebaseio.com",
      projectId: "nduthis-24c17",
      storageBucket: "",
      messagingSenderId: "500591377581"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  
  ENV['ember-simple-auth'] = {
    authenticationRoute: 'index',
    routeAfterAuthentication: 'protected',
    routeIfAlreadyAuthenticated: 'protected'
  };

  ENV['auth0-ember-simple-auth'] = {
    clientID: "hWPHYr9T15r2ZSm8lOZ6njrSfc9yL4xQ",
    domain: "nduthis.auth0.com"
  }

  return ENV;
};
