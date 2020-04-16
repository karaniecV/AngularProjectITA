import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarClick: EventEmitter<string> = new EventEmitter<string>();

  links: string[] = ['profile', 'messages']

  constructor() { }

  ngOnInit(): void {
  }

  onSidebarClick(item: number){
    this.sidebarClick.emit(this.links[item])
    console.log('item', item)
  }

}
