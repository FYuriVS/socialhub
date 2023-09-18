import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  styleData!: {
    // icon: string;
    data: string;
  }[];

  actions!: {
    icon: string;
    data?: string;
  }[];

  constructor() {}
  ngOnInit(): void {
    this.actions = [
      {
        icon: 'pi pi-comment',
        data: '14',
      },
      {
        icon: 'pi pi-sort-alt',
        data: '25',
      },
      {
        icon: 'pi pi-heart',
        data: '20',
      },
      {
        icon: 'pi pi-chart-bar',
        data: '42',
      },
      {
        icon: 'pi pi-upload',
      },
    ];
  }
}
