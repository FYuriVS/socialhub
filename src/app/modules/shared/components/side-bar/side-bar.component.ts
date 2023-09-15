import { Component } from '@angular/core';
import { Sections } from '../../interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  sections: Sections[] = [
    { icon: 'pi pi-home', title: 'Home' },
    { icon: 'pi pi-home', title: 'Explore' },
    { icon: 'pi pi-home', title: 'Notifications' },
    { icon: 'pi pi-home', title: 'Messages' },
  ];
  constructor() {}
}
