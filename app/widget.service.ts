import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Widget} from './widget';
import {WIDGETS} from './mock-widgets';

@Injectable()
export class WidgetService{

  constructor(
    private http: Http
  ){}

  getResources(): Observable<Widget[]> { 
    let url = 'http://localhost:3000/resources';
    return this.http.get(url);
    // return Promise.resolve(WIDGETS);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
