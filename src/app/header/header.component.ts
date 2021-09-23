import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  contentTopic: string = "Arrays";
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  selectedTopic(name: string){
    this.contentTopic = name;
  }
}
