const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'fcc-pta-registration'
    },
    port: process.env.PORT || 3000,
    db: {
    "username": "nrsti",
    "password": "xfiles",
    "database": "registration",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
    }
  },

  uat: {
    root: rootPath,
    app: {
      name: 'fcc-pta-registration'
    },
    port: process.env.PORT || 3000,
    db: {
    "username": process.env.username,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "port": process.env.port,
    "dialect": process.env.dialect
    }
  },


  test: {
    root: rootPath,
    app: {
      name: 'fcc-pta-registration'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/fcc-pta-registration-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fcc-pta-registration'
    },
    port: process.env.PORT || 3000,
    db: {
      "username": process.env.username,
      "password": process.env.password,
      "database": process.env.database,
      "host": process.env.host,
      "port": process.env.port,
      "dialect": process.env.dialect
      }
  }
};

module.exports = config[env];
