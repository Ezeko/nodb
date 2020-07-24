module.exports = function (app) {
    var customers = require ('../controllers/roboControllers');

    app.post('/api/employee', employee.create);
    app.get('/api/employee', employee.findAll);
    app.get('/api/employee', employee.find.One);
    app.put('/api/employee', employee.update);
    app.delete('/api/employee', employee.delete);
    app.get('/api/customers', customers.getAll)
}