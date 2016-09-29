import {Component, OnInit} from '@angular/core';

import {Widget} from './widget';
import {WidgetService} from './widget.service';
import {ValuesPipe} from './object-to-iterable.pipe';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'my-widgets',
  templateUrl: 'app/templates/widgets.component.html',
  providers: [WidgetService],
  pipes: [ValuesPipe]
})

export class WidgetsComponent implements OnInit {
  widgets: Widget[];

  constructor(
    private widgetService: WidgetService,
    private _authService: AuthenticationService
  ){}

  getWidgets(): void {
    this.widgetService.getWidgets().then(widgets => this.widgets = widgets);
  }

  generateArray(obj){
    return Object.keys(obj).map(
      (key)=>{
        return [key, obj[key]]
      }
    );
  }

  ngOnInit(): void {
    this._authService.checkCredentials();
    this.getWidgets();
  }
}
