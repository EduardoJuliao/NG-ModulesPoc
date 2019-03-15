import { AppService } from './app.service';
import { ApiClientService } from 'projects/api-client/src/public_api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ApiClientService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
