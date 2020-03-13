import { trigger, transition, style, query, animateChild, group, animate, keyframes } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Initial State
      query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),

      // Queries can be grouped to play animation in paralell
      group([

        // Enter Initial Style
        query(':enter', [style({ opacity: '0', clipPath: 'inset(0 100% 0 0)' })], { optional: true }),

        // Enter Animation
        query(':enter', [
          animate('1.5s', keyframes([
            style({ opacity: 1, clipPath: 'inset(0 0 0 0)' }),
          ])),
          animateChild()], { optional: true }),

        query(':leave', [style({ opacity: '1', clipPath: 'inset(0 0 0 0)' })], { optional: true }),

        // Leave Animation
        query(':leave', [
          animate('1.5s', keyframes([
            style({ opacity: 0, clipPath: 'inset(0 0 0 100%)', offset: .99 }),
          ])),
          animateChild()], { optional: true }),
      ])
    ])
  ]);
