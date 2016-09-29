import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'private-component',
  templateUrl: 'app/templates/private.component.html'
})

export class PrivateComponent implements OnInit{
  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.authService.checkCredentials();
  }

  logout(){
    this.authService.logout();
  }

}
