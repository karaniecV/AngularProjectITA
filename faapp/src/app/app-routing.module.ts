import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { MessagesComponent } from './sidebar/messages/messages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContentComponent } from './content/content.component';
import { LogInComponent } from './log-in/log-in.component';
import { PostComponent } from './content/post/post.component';
import { MyPostResolver } from './shared/services/my-posts/my-post.resolver';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsResolver } from './shared/services/contacts-service/contacts.resolver';
import { SingleContactComponent } from './contacts/single-contact/single-contact.component';


const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path: '', component: ContentComponent},
  {path: 'posts/:id', component: PostComponent,
  resolve: {posts: MyPostResolver}} ,
  {path: 'contacts/:id', component: SingleContactComponent,
  resolve: {posts: ContactsResolver}} ,
  {path: 'sign-up', component: SignUpComponent},
  {path: 'my-profile', component: ProfileComponent},
  {path: 'message', component: MessagesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
