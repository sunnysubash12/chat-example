import { Component, OnInit } from '@angular/core';

import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  ThemeService,
} from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private themeService: ThemeService,
  ) {
    // or light
    this.themeService.theme$.next('dark');

    const apiKey = 'dz5f4d5kzrue';
    const userId = 'icy-night-2';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaWN5LW5pZ2h0LTIiLCJleHAiOjE3MzgzMjI5MTZ9.GzvCdvKKFxM0XG1-e48LV0KJP8UwkTfhzO1eiFou6Ao';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }
}