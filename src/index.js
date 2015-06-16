var isNullOrUndefined = require("core.is_null_or_undefined"),
    isLength = require("core.is_length");

module.exports = applyNoThis;

function applyNoThis(fn, args) {

    var argCount = isNullOrUndefined(args) || !isLength(args.length) ? 0 : args.length;

    switch (argCount) {
        case 0:
            return fn();
        case 1:
            return fn(args[0]);
        case 2:
            return fn(args[0], args[1]);
        case 3:
            return fn(args[0], args[1], args[2]);
        case 4:
            return fn(args[0], args[1], args[2], args[3]);
        case 5:
            return fn(args[0], args[1], args[2], args[3], args[4]);
        case 6:
            return fn(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
            return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        default:
            return fn.apply(undefined, args);
    }

}
