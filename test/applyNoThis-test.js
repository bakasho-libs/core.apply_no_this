var test = require("tape"),
    applyNoThis = require("../src/index");

test("applyNoThis", function(t) {

    var n0, n1, n2, n3, n4, n5, n6, n7, n8;

    n0 = applyNoThis(function() {
        return 0;
    });

    n1 = applyNoThis(function(a) {
        return a;
    }, [1]);

    n2 = applyNoThis(function(a, b) {
        return a + b;
    }, [1, 1]);

    n3 = applyNoThis(function(a, b, c) {
        return a + b + c;
    }, [1, 1, 1]);

    n4 = applyNoThis(function(a, b, c, d) {
        return a + b + c + d;
    }, [1, 1, 1, 1]);

    n5 = applyNoThis(function(a, b, c, d, e) {
        return a + b + c + d + e;
    }, [1, 1, 1, 1, 1]);

    n6 = applyNoThis(function(a, b, c, d, e, f) {
        return a + b + c + d + e + f;
    }, [1, 1, 1, 1, 1, 1]);

    n7 = applyNoThis(function(a, b, c, d, e, f, g) {
        return a + b + c + d + e + f + g;
    }, [1, 1, 1, 1, 1, 1, 1]);

    n8 = applyNoThis(function(a, b, c, d, e, f, g, h) {
        return a + b + c + d + e + f + g + h;
    }, [1, 1, 1, 1, 1, 1, 1, 1]);


    t.equal(n0, 0, "applies 0 arguments");
    t.equal(n1, 1, "applies 1 argument");
    t.equal(n2, 2, "applies 2 arguments");
    t.equal(n3, 3, "applies 3 arguments");
    t.equal(n4, 4, "applies 4 arguments");
    t.equal(n5, 5, "applies 5 arguments");
    t.equal(n6, 6, "applies 6 arguments");
    t.equal(n7, 7, "applies 7 arguments");
    t.equal(n8, 8, "applies 8 arguments");


    t.end();

});
