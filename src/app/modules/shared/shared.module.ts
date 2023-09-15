import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [CardComponent, SideBarComponent, PostsComponent],
  imports: [CommonModule, ButtonModule, AutoCompleteModule, InputTextModule],
  exports: [
    CardComponent,
    SideBarComponent,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    PostsComponent,
  ],
})
export class SharedModule {}
