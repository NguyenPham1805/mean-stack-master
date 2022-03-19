import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostItemModule } from 'src/app/components/post-item/post-item.module';
import { AddPostModule } from 'src/app/components/add-post/add-post.module';
import { PostSkeletonModule } from 'src/app/components/post-skeleton/post-skeleton.module';

@NgModule({
  declarations: [HomeComponent, PostDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostItemModule,
    AddPostModule,
    PostSkeletonModule,
  ],
})
export class HomeModule {}
