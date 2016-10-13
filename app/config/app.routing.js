"use strict";
var router_1 = require('@angular/router');
var private_component_1 = require('../components/private.component');
var login_component_1 = require('../components/login.component');
var appRoutes = [
    {
        path: 'home',
        component: private_component_1.PrivateComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map