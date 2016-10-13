import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'private-page',
  moduleId: module.id,
  templateUrl: '../templates/private.component.html',
})

export class PrivateComponent implements OnInit {
  constructor(private authService: AuthenticationService) {  }

  ngOnInit() {
    this.authService.checkCredentials();
  }
}
