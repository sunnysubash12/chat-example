import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StreamChatModule } from 'stream-chat-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StreamChatModule,  // ✅ Import Stream Chat Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}