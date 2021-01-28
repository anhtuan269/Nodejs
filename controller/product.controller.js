var db = require('../db');
module.exports.product = function(req, res) {
    var page = parseInt(req.query.page) || 1 ;
    var perpage = 9;
    var start = (page - 1) * perpage;
    var end = perpage * page;
    res.render('products/new-product', {
        products: db.get('products').value().slice(start, end)
    });
};