var db = require('../db');
module.exports.index = function(req, res){
    res.render('users/index', {
      users: db.get('users').value()
    });
};
module.exports.create = function( req, res){
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('');
    
};
module.exports.id = function(req, res ) {
    var id = req.params.id;
    var user = db.get('users').find( {id: id}).value();
    res.render('users/view', {
        user : user
        
    });
};
module.exports.search =  function( req, res){
    var q = req.query.q;
    var users = db.get('users');
    var mathchedUsers = users.filter(function( user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;

    });
    
    res.render('users/index',{
        users: mathchedUsers.value()

    });
};