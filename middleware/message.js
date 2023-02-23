function message(req, res, next) {
    console.log("This message it coming from the middleware");
    next();
}

module.exports = {message};