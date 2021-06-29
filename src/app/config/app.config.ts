import { Injectable } from "@angular/core";
import { IAppConfig } from "./app.config.model";

@Injectable(
  {
    providedIn: "platform"
  }
)
export class AppConfig {
  public static settings: IAppConfig;
  private static readonly jsonURL = 'assets/config.json';
  public static load(): Promise<AppConfig> {
    return new Promise((resolve, reject) => {
      fetch(this.jsonURL)
        .then(async res => {
          const configuration = await res.json();
          AppConfig.settings = configuration as IAppConfig;
          resolve(AppConfig);
        })
        .catch(exception => reject(exception));
    });
  }
}
