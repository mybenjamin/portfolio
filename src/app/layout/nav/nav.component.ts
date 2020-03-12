import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { navAnimations } from './nav.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: navAnimations
})

export class NavComponent {

  prevScrollpos = 99999999999;
  navOpen: boolean;
  spam = false;
  @ViewChild('mainFab', { read: ElementRef }) fab: ElementRef;

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
    setTimeout(() => this.spam = !this.spam, 600);
  }

  @HostListener('window:scroll', ['$event']) hideButton(e) {
    if (this.navOpen) { return; }
    const fab = this.fab.nativeElement;
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      fab.style.transform = 'translateX(0)';
      fab.disabled = false;
    } else {
      fab.style.transform = 'translateX(100px)';
      fab.disabled = true;
    }
    this.prevScrollpos = currentScrollPos;
  }
}
