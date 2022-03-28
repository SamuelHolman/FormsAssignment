exports.get_birds = function (req, res) {
    res.render('./birds/index', { title: 'Express' });
};

exports.create_birds = function (req, res) {
    res.render('./birds/create', { title: 'Express' });
};

exports.completed_birds = function (req, res) {
    res.render('./birds/completed', { title: 'Express' });
};

exports.post_birds = function (req, res) {
    let newBird = {
        Species: req.body.species,
        Nickname: req.body.nickname,
        Status: req.body.status
    }

    console.log(newBird);

    res.redirect('/birds/completed');
};