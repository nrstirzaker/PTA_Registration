var errorHandlers = function () {


    function clientErrorHandler(err, req, res, next) {
        if (req.xhr) {
            res.status(500).send({ error: 'Something failed!' })
        } else {
            next(err)
        }
    }
    function systemErrorHandler(err, req, res, next) {
        res.status(500)
        res.render('error', { error: err })
    }
    
    return {
        systemErrorHandler: systemErrorHandler,
        clientErrorHandler: clientErrorHandler
    }

}();

module.exports = exports = errorHandlers;