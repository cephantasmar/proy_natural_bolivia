import { Component } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';

  isSideNavCollapsed=false;
  screeenWidth=0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screeenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
