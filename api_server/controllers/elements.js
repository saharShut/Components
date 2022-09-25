const {Container, Element} = require('../../app_server/models/sequelize');
let request = require('request');


let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.elementListById = function (req, res) {
    sendJsonResponse(res, 200, {"status": "ok"});
};


module.exports.createElement = function (req, res) {
    Element.create({
        element_amount: req.body.element_amount,
        element_name: req.body.element_name,
        element_description: req.body.element_description,
        elContainerContainerId: req.params.containerid,
    })
    .then(
        function(doc, err) {
            if(err) {
                console.log(err);
                sendJsonResponse(res, 404, err);
                return;
            } else {
                res.redirect('/');
            }
    });
};


module.exports.updateElement = function (req, res) {

    Element.update({
        element_amount: req.body.element_amount,
        element_name: req.body.element_name,
        element_description: req.body.element_description,
        elContainerContainerId: req.params.containerid,
    }, {
        where: {
            element_id: req.params.elementid,
        }
    })
    .then(
        function(doc, err) {
            if(err) {
                console.log(err);
                sendJsonResponse(res, 404, err);
                return;
            } else {
                res.redirect('/');
            }
    });
};

module.exports.getElement = function (req, res) {
    console.log("GET ELEMENT WAS CALLED");
    Element.findOne({
        where: {
            element_id: req.params.elementid,
        }
    })
    .then( function(doc, err) {
        if(err) {
            console.log(err);
            sendJsonResponse(res, 404, err);
            return;
        } else {
            sendJsonResponse(res, 200, doc);
            return;
        }
    });
};

module.exports.deleteElement = function (req, res) {
    Element.destroy({
        where: {
            element_id: req.params.elementid,
        }
    })
    .then(function(body) {
        sendJsonResponse(res, 200, body);
    })
    .catch(
        function(err) {
            sendJsonResponse(sendJsonResponse(res, 400, err));
        }
    );
};


