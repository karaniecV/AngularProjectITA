import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService){}
  title = 'faapp';

  isMobile = false;
  
  activePage = 'profile';

  $user = this.authService.user;

  constru

  ngOnInit(){
    if(window.innerWidth <= 768){
      this.isMobile = true;
    }
    window.onresize = () => this.isMobile = window.innerWidth <= 768;
  }

  onSidebarClick(page: string){
    this.activePage = page;
  }
}
