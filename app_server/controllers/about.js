
/* Получаем GET страницу О нас*/
module.exports.about = function(req, res){
    res.render('about', {
        title: 'About',
        description: 'Проект посвящен логистике элементной базой.',
        members: [{
            date: '16.08.2022',
            note: 'Добавление node postgress пакета. https://node-postgres.com/features/connecting'
        }, {
            date: '16.08.2022',
            note: 'Подключение к проекту MongoDB.'
        }, {
            date: '16.08.2022',
            note: 'Добавление Sequelize пакета. https://sequelize.org/docs/v6/getting-started/'
        }, {
            date: '16.08.2022',
            note: 'Добавление pg-hstore пакета. https://www.npmjs.com/package/pg-hstore'
        }, {
            date: '07.09.2022',
            note: 'Создание API',
        }]

    });
};