import { Component } from '@angular/core';
import { AppConfig } from "./config/app.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author = AppConfig.settings.author;
  version = AppConfig.settings.version;
}
