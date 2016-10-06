"use strict";
const router_1 = require('@angular/router');
const private_component_1 = require('./private.component');
const login_component_1 = require('./login.component');
const widgets_component_1 = require('./widgets.component');
const appRoutes = [
    {
        path: 'home',
        component: private_component_1.PrivateComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'widgets',
        component: widgets_component_1.WidgetsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map