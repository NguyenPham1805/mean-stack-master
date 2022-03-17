import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostComponent } from 'src/app/components/add-post/add-post.component';
import { PostItemComponent } from 'src/app/components/post-item/post-item.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HomeComponent,
    PostDetailComponent,
    PostItemComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class HomeModule {}
