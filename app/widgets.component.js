"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const widget_service_1 = require('./widget.service');
const object_to_iterable_pipe_1 = require('./object-to-iterable.pipe');
const authentication_service_1 = require('./authentication.service');
let WidgetsComponent = class WidgetsComponent {
    constructor(widgetService, _authService) {
        this.widgetService = widgetService;
        this._authService = _authService;
    }
    getWidgets() {
        this.widgetService.getWidgets().then(widgets => this.widgets = widgets);
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            return [key, obj[key]];
        });
    }
    ngOnInit() {
        this._authService.checkCredentials();
        this.getWidgets();
    }
};
WidgetsComponent = __decorate([
    core_1.Component({
        selector: 'my-widgets',
        templateUrl: 'app/templates/widgets.component.html',
        providers: [widget_service_1.WidgetService],
        pipes: [object_to_iterable_pipe_1.ValuesPipe]
    }), 
    __metadata('design:paramtypes', [widget_service_1.WidgetService, authentication_service_1.AuthenticationService])
], WidgetsComponent);
exports.WidgetsComponent = WidgetsComponent;
//# sourceMappingURL=widgets.component.js.map