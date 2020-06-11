import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from './contacts.service';
import { ContactData } from '../../models/contact-data.model';

@Injectable({
  providedIn: 'root',
})

export class ContactsResolver implements Resolve<ContactData[]>{

  constructor(private contactsService: ContactsService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContactData[]> {
    return this.contactsService.getFriendsId(

    )
  }




}