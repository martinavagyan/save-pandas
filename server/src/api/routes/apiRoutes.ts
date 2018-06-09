
module.exports = (app: any, passport: any) => {
    const apiController = require('../controllers/apiController')(passport);

    app.use((req: any, res: any, next: any) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        next();
    });

    app.route('/').get(apiController.home_get);

    app.route('/api/login').post(apiController.jwt_login_post);
    app.route('/api/signup').post(apiController.signup_post);
    app.route('/api/logout').get(apiController.logout_get);
    app.route('/api/user/:userId').get(apiController.isJWTValid, apiController.get_user);

    app.route('/api/projects/').get(apiController.projects_get);
    app.route('/api/project/').post(apiController.project_post);

    app.route('/api/donations').get(apiController.donations_get);
    app.route('/api/donation').post(apiController.donation_post);

    /**
     * Iota stuff
     * */
    app.route('/api/transaction/').post(apiController.add_transaction);
    app.route('/api/transaction/:numberOfTransactions').get(apiController.get_latest_transactions);
    /**
     * Testing routes
     * */
    app.route('/api/test/').get(apiController.isJWTValid, apiController.test_get);
    app.route('/api/test_no_auth/').get( apiController.test_get);
    app.route('/api/test/').post(apiController.test_post);
    app.route('/api/test/:id').delete(apiController.test_delete);
    app.route('/**').get(apiController.home_get);
};
