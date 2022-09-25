let request = require('request');
let apiOption = {
    server: 'http://localhost:3000'
};

let renderMain = function(req, res, data) {

    res.render('index', {
        title: 'Elements list',
        containers: data,
    });
};

let renderAddElement = function(req, res) {
    res.render('addElement', {
        containerid: req.params.containerid,
        actionUri: "/api/containers/" + req.params.containerid + "/elements/",
    });
};

let renderUpdateElement = function(req, res) {
    let requestOption = {
        url: apiOption.server + "/api/containers/" + req.params.containerid + "/elements/" + req.params.elementid,
        method: "GET",
        json: {},
        qs: {},
    };
    
    request(requestOption, function(err, response, body) {
        if(err) {
            console.log(err);
        } else if (response.statusCode === 200){
            console.log(body);
            res.render('updateElement', {
                containerid: req.params.containerid,
                actionUri: "/api/containers/" + req.params.containerid + "/elements/" + req.params.elementid,
                element: {
                    name: body.element_name,
                    description: body.element_description,
                    amount: body.element_amount,
                },
                elementid: req.params.elementid,
            });
        } else {
            console.log(response.statusCode);
        }
    });

    
};

let renderAddContainer = function(req, res) {
    res.render('addContainer', {

    });
}

/* Получаем GET домашнюю страницу */
module.exports.index = function(req, res){
    let requestOption = {
        url: apiOption.server + "/api/containers",
        method: "GET",
        json: {},
        qs: {},
    };
    request(requestOption,  function(err, response, body) {
        if(err) {
            console.log(err);
        } else if (response.statusCode === 200){
            renderMain(req,res, body);
        } else {
            console.log(response.statusCode);
        }
    });
    
};

/* Форма для добавления элемента или обновления */
module.exports.elementForm = function(req, res) {
    if(req.params.elementid) {
        renderUpdateElement(req, res);
    } else {
        renderAddElement(req, res);
    }
}


/* Форма добавления контэйнера */
module.exports.containerForm = function(req, res) {
    renderAddContainer(req, res);
}


/* DeleteElement */
module.exports.deleteElement = function(req, res) {
    let requestOption = {
        url: apiOption.server + "/api/elements/" + req.params.elementid,
        method: "DELETE",
        json: {},
        qs: {},
    };

    request(requestOption, function(err, response, body) {
        if(err) {
            console.log(err);
        } else if (response.statusCode === 200){
            res.redirect("/");
        } else {
            console.log(response.statusCode);
        }
    });
}