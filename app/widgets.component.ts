import {Component, OnInit} from '@angular/core';

import {Widget} from './widget';
import {WidgetService} from './widget.service';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'my-widgets',
  templateUrl: 'app/templates/widgets.component.html',
  providers: [WidgetService],
})

export class WidgetsComponent implements OnInit {
  private widgets: Widget[];
  private resources: Object[];

  constructor(
    private widgetService: WidgetService,
    private _authService: AuthenticationService
  ){}

  getWidgets(): void {
    // this.widgetService.getWidgets().then(widgets => this.widgets = widgets);
    this.widgets = [];
    for (let resource of this.resources){
      let properties = JSON.parse(resource.properties);
      let type = properties.type;
      delete properties.type;
      properties = this.generateArray(properties);

      let widget = new Widget(resource.id, type, properties);
      this.widgets.push(widget);
    }
  }

  getResources(): void {
    this.widgetService.getResources()
    .subscribe(
      res => {
        if (res.status == 200){
          this.resources = res.json();
          this.getWidgets();
        }
        else{
          console.error("Bad Request");
        }
      },
      err => {
        this.handleError(err);
      }
    );
  }

  private generateArray(obj){
    return Object.keys(obj).map(
      (key)=>{
        return [key, obj[key]]
      }
    );
  }

  ngOnInit(): void {
    this._authService.checkCredentials();
    this.getResources();
  }
}
