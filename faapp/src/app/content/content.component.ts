import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // message = "";

  // rtrt = 'gfhfg';

  addresses: string[] = [];
  address = '';

  constructor() { 
    // setTimeout(() => {
    //   this.getMessage();

    // }, 3000)
  }

  ngOnInit(): void {
  }

  // public getMessage(): string {
  //   return this.message = 'hello world!';
  // }

  onClick(){
    this.addresses.push(this.address);
    console.log('this.addresses', this.addresses)
    this.address = '';

  }



}
