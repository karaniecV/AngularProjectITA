import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactData } from 'src/app/shared/models/contact-data.model';
import { CONFIG } from 'src/app/shared/config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ContactsService } from '../../shared/services/contacts-service/contacts.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  @ViewChild('form', { static: true }) formPost: NgForm;

  post: any;
  contactId: string;
  showInputAria = false;
  imageSrc: any;
  image: any;
  contactClick: ContactData;
  userName: string;

  constructor(
    // private myPostService: MyPostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private contactService: ContactsService, private authService: AuthService) { }

  ngOnInit(): void {
    // if (localStorage.getItem(`${CONFIG.localStorageId}`)) {
    //   this.authService.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
    //     .subscribe(user => this.userName = user.firstName)
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.contactId = paramMap.get('id');
      this.authService.getSignUser(this.contactId)
        .subscribe((contact) => {
          if (contact) {
            // tisClickContact = false; = true;
            this.contactClick = contact;
          }
        })

      //   this.contactService.getUser(this.contactId).subscribe(contact=>this.contactClick = contact)
      //   console.log('this.contactClick', this.contactClick)
      // });
    })
  }
  onDeliteContact(id) {

  }

  // onDelete(postId) {
  //   const isDelete = confirm("Will you want delete this post?");
  //   if (isDelete) {
  //     this.myPostService.deletePost(postId);
  //     this.myPostService.deletePostArr(postId);
  //     this.router.navigate(['/'])
  //   }

  // }

  // onChangePost(id, form: NgForm) {
  //   this.showInputAria = false;
  //   this.post = {
  //     postDate: Date.now(),
  //     postDescription: form.value.postDescription,
  //     postFile: this.imageSrc
  //   }
  //   this.myPostService.updatePost(id, this.post).subscribe(data=>{
  //     console.log(data)
  //   })
  //   this.isHideAria()
  // }

  // onFormPostSubmit(form: NgForm) {

  // }

  // isHideAria() {
  //   this.showInputAria = false;
  //   this.router.navigate(['/'])
  // }

  // fileChange(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = ((e) => {
  //       this.imageSrc = null;
  //       this.imageSrc = e.target['result'];
  //       // console.log('this.imageSrc', this.imageSrc)
  //       this.image = event.target.files[0];
  //     });
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }


}
