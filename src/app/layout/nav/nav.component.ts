import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { navAnimations } from './nav.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: navAnimations
})

export class NavComponent {

  navOpen: boolean;
  spam = false;

  constructor() { }

  showTooltips(tooltips: Array<MatTooltip>) {
    for (const tooltip of tooltips) {
      tooltip.show();
    }
  }

  showNav() {
    this.spamProtector();
    this.navOpen = !this.navOpen;
  }

  spamProtector() {
    this.spam = true;
    setTimeout(() => this.spam = !this.spam, 1100);
  }
}
