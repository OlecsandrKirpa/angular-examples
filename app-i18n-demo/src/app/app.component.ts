import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-i18n-demo';

  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Russo' }
  ]
}
