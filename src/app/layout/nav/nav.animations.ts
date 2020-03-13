import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';

export const navAnimations = [
  trigger('flowInOut', [
    transition(':enter', [
      query('button', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        stagger(-75, [
          animate(100, style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ]),

    transition(':leave', [
      query('button', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        stagger(50, [
          animate(100, style({ opacity: 0, transform: 'translateY(100px)' }))
        ])
      ])
    ])
  ]),

  trigger('flipIn', [
    transition('void => *', [
      animate('.5s', keyframes([
        style({ opacity: 0, transform: 'rotateX(80deg)' }),
        style({ opacity: 1, transform: 'rotateX(0)' }),
      ]))
    ]),
  ])
];
