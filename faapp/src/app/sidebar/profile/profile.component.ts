import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CONFIG } from 'src/app/shared/config';
import { ContactData } from 'src/app/shared/models/contact-data.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData: ContactData;

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
    .subscribe((user) => {this.userData = user})
  }

}
