import { Component } from '@angular/core';
import { PromoManagerService } from './promo-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-promo';

  constructor(private man: PromoManagerService) {
  }

  load(label: string): void {
    this.man.load(label, 20);
  }
}
