import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, StreamAutocompleteTextareaModule, StreamChatModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}