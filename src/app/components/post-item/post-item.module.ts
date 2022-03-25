import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { PostItemComponent } from './post-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [PostItemComponent],
})
export class PostItemModule {}
