import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @Input() user!: CurrentUser;
  @Output('form-click') onFormClick = new EventEmitter();
}
