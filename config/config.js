const config = {

    port: 4000,

   // jwtSecret: envVars.JWT_SECRET,
    mongo: {
        host: 'mongodb://localhost/pharmacy',
        port: 27017
    }
};

module.exports = config;
