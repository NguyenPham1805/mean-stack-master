import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AddPostModule } from 'src/app/components/add-post/add-post.module';
import { PostItemModule } from 'src/app/components/post-item/post-item.module';
import { ProfileHeaderComponent } from 'src/app/components/profile-header/profile-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ProfileComponent, ProfileHeaderComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AddPostModule,
    PostItemModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class ProfileModule {}
