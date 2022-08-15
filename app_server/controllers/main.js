
/* Получаем GET домашнюю страницу */
module.exports.index = function(req, res){
    res.render('index', {title: 'Express'});
};
