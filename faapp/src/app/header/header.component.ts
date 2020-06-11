import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { CONFIG } from './../shared/config';
import { ContactData } from '../shared/models/contact-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = false;

  $user = this.authSevice.user;

  userName: string;

  isLogIn = false;
  
  isMobila = false;
  userData: ContactData;
  router: any;

  constructor(public authSevice: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem(`${CONFIG.localStorageId}`)) {
      this.authSevice.autoLogIn();
      this.authSevice.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
        .subscribe(user =>
          // console.log('user', user)
           this.userData = user           )
      
    } else this.router.navigate(['/log-in'])

    // if(window.innerWidth <= 768 && (localStorage.getItem(`${CONFIG.localStorageId}`))){
    //   this.isMobila = true;
    // }
    // window.onresize = () => this.isMobila = window.innerWidth <= 768;
  
    // if(this.authSevice.userValue){
    // this.authSevice.userData.subscribe((data) => {console.log(data)})
    // }
    // this.userName = this.authSevice.userValue.first;

    // this.authSevice.getLogLs().length

    if(localStorage.getItem(`${CONFIG.localStorageId}`)){
      this.isLogIn = true;
    //   this.jiij = localStorage.getItem(`${CONFIG.localStorageId}`);
    }
    
  }
  logOut(){
    this.authSevice.onLogOut()
    this.isLogIn = false;
    // return false
  }

  
}
