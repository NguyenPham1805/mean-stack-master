import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostFormComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  exports: [PostFormComponent],
})
export class PostFormModule {}
