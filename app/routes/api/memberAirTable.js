const express = require('express');
const router = express.Router();
const db = require('../../models');
const datadictionary = require('../../modules/datadictionary');
const datasource = require('../../modules/datasource');
const moment = require('moment');
const Logger = require('bunyan');

var logger = new Logger({
    name: 'memberapi',
    streams: [
        {
            stream: process.stdout,
            level: 'debug'
        },
        {
            path: 'hello.log',
            level: 'trace'
        }
    ],
    serializers: {
        req: Logger.stdSerializers.req
    },
});


var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keydY5bi1YtLgvSnG' }).base('app29Lc2TKrmHYHnL');

module.exports = (app) => {
    app.use('/', router);
};

router.get('/', (req, res, next) => {

    res.render('index', {
        title: "Friends of Christ's College (PTA) Registration Page",
    });

});

router.get('/api/member', (req, res, next) => {
    var email = req.query.searchEmail;
    logger.debug('GET:/api/member: Called with email: ' + email);
    if (!email) {
        res.status(200);
        var error = { error: "No Email address specified" };
        res.json(error);
        res.send();
        return;
    }
});

router.post('/api/member', (req, res, next) => {

    logger.debug('POST:/api/member: Called with email: ' + req.body.email);
    if (req.body.id) {
        var data = datadictionary.updateMember(req.body);
        var id = data.id;
        delete data.id;
        base('Members').update(
            
            {
                'id': id,
                'fields': data
            }, function (error, records) {
                if (error) {
                    logger.error(error);
                    res.status(200);
                    res.json(error);
                    res.send();
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });

    } else {
        var data = datadictionary.createMember(req.body);
        base('Members').create([
            {
                "fields": data

            }], function (err, records) {
                if (err) {

                    res.status(200);
                    var error = { 'status': 'error', err }
                    logger.error(error);
                    res.json(error);
                    res.send();
                    return;
                }
                res.status(200);
                res.json({ 'status': 'success' });
                res.send();
                return;
            });
    }

});