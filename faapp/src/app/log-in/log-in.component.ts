import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { ContactData } from '../shared/models/contact-data.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @ViewChild('form', { static: true }) formSign: NgForm;

  isInvalid = false;

  user: ContactData;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onFormSubmit(formSign: NgForm) {
    if (formSign.invalid) {
      return this.isInvalid = true;
    }
    this.authService.onLogin(formSign.value.emailPhone, formSign.value.password)
      .subscribe((data) => {
        console.log(data)
        // this.user.id = data.localId
        // console.log('this.user.id', this.user.id)
      },
        (error) => {
          formSign.resetForm();
        })
  }


}
