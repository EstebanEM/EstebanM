import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'web_pages';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // 1) Idiomas disponibles
    this.translate.addLangs(['es', 'en']);

    // 2) Idioma de respaldo
    this.translate.setFallbackLang('es');

    // 3) Lógica SOLO en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');

      if (savedLang === 'es' || savedLang === 'en') {
        this.translate.use(savedLang);
        return;
      }

      const browserLang = this.translate.getBrowserLang();
      const initialLang = browserLang?.match(/es|en/) ? browserLang : 'es';
      this.translate.use(initialLang);
    }
  }
}
