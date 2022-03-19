import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eye-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  info = [
    { icon: 'favorite', content: 'có mối quan hệ phức tạp' },
    { icon: 'place', content: 'sống tại Hồ Chí Minh' },
    { icon: 'rss_feed', content: '31 người theo dõi' },
  ];
  hobbys = ['viết code', 'nghe nhạc', 'chơi game'];

  constructor() {}

  ngOnInit(): void {}
}
