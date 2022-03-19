import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AddPostComponent } from './add-post.component';

@NgModule({
  declarations: [AddPostComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [AddPostComponent],
})
export class AddPostModule {}
