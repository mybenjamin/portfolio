import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        animate('.5s', keyframes([
          style({ opacity: 0, transform: 'translateX(100px)' }),
          style({ opacity: 1, transform: 'translateX(0)' }),
        ]))
      ]),

      transition('* => void', [
        animate('.5s', keyframes([
          style({ opacity: 1, transform: 'translateX(0)' }),
          style({ opacity: 0, transform: 'translateX(100px)' }),
        ]))
      ])
    ]),

    trigger('flipIn', [
      transition('void => *', [
        animate('.5s', keyframes([
          style({ opacity: 0, transform: 'rotateX(80deg)' }),
          style({ opacity: 1, transform: 'rotateX(0)' }),
        ]))
      ]),

      transition('void => *', [
        animate('.5s', keyframes([
          style({ opacity: 0, transform: 'rotateX(0)' }),
          style({ opacity: 1, transform: 'rotateX(80deg)' }),
        ]))
      ])
    ])
  ]
})

export class NavComponent {

  navOpen: boolean;

  constructor() { }

  showTooltips(tooltips: Array<MatTooltip>) {
    for (const tooltip of tooltips) {
      tooltip.toggle();
    }
  }
}
