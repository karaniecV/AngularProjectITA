import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faapp';
  
  activePage = 'profile';

  onSidebarClick(page: string){
    this.activePage = page;
    console.log('page', page)
  }
}
