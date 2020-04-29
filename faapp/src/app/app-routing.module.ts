import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { MessagesComponent } from './sidebar/messages/messages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'my-profile', component: ProfileComponent},
  {path: 'message', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
