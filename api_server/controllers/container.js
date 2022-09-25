const {Container, Element} = require('../../app_server/models/sequelize');

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.containerList = function (req, res) {
    Container.findAll({
        include: Element,
    }).then(containers => {
        sendJsonResponse(res, 200, containers);
    });
};


module.exports.containerCreate = function (req, res) {
    Container.create({
        container_name: req.body.container_name,
        container_descriptor: req.body.container_descriptor,
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


module.exports.containerGet = function (req, res) {    
    Container.findAll({ 
        include: Element,
        where: {
            container_id: req.params.containerid
        }
    })
        .then(container => {
            sendJsonResponse(res, 200, container);
        });
};


module.exports.containerDelete = function (req, res) {

};