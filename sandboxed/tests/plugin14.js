
var val = 3;

var cb = function(result) {
    var cb2 = function() {
        application.remote.done();
    }

    application.remote.check(result == val*val);
}


application.remote.square(val, cb);