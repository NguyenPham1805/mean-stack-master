import { Component, Input, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input() userInfo: CurrentUser | null = null;
  public info = [
    { icon: 'favorite', content: 'có mối quan hệ phức tạp' },
    { icon: 'place', content: 'sống tại Hồ Chí Minh' },
    { icon: 'rss_feed', content: '31 người theo dõi' },
  ];

  public hobbys = ['viết code', 'nghe nhạc', 'chơi game'];

  constructor() {}

  ngOnInit(): void {}
}
