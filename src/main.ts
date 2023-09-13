import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {provideHttpClient} from '@angular/common/http';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
