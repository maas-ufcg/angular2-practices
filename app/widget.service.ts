import {Injectable} from '@angular/core';

import {Widget} from './widget';
import {WIDGETS} from './mock-widgets';

@Injectable()
export class WidgetService{
  getWidgets(): Promise<Widget[]> {
    return Promise.resolve(WIDGETS);
  }
}
