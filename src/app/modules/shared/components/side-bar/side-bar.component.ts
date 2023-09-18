import { Component } from '@angular/core';
import { Sections } from '../../interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  sections: Sections[] = [
    { icon: 'pi pi-th-large', title: '' },
    { icon: 'pi pi-home', title: 'Home' },
    { icon: 'pi pi-search', title: 'Explore' },
    { icon: 'pi pi-bell', title: 'Notifications' },
    { icon: 'pi pi-send', title: 'Messages' },
  ];
  constructor() {}
}
