let mongoose = require('mongoose')


/* Connecting to Mongoose */
let dbURI = 'mongodb://localhost/loc8r';
mongoose.connect(dbURI);

/* callbacks from db connection */
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});





gracefulShutdown = function (msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// Для перезапуска Nodemon
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Для завершения приложения
process.once('SIGINT', function(){
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
