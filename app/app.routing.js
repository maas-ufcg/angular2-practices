"use strict";
const router_1 = require('@angular/router');
const private_component_1 = require('./private.component');
const login_component_1 = require('./login.component');
const appRoutes = [
    {
        path: 'home',
        name: 'Home',
        component: private_component_1.PrivateComponent
    },
    {
        path: 'login',
        name: 'Login',
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