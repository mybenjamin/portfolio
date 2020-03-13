import { trigger, transition, style, query, animateChild, group, animate, keyframes } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),

      // Initial State
      query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),

      // Queries can be grouped to play animation in paralell
      group([

        // Enter Initial Style
        query(':enter', [style({ opacity: '0', transform: 'translateX(-150em)' })], { optional: true }),

        // Enter Animation
        query(':enter', [
          animate('.8s', keyframes([
            style({ opacity: 1, transform: 'translateX(0)' }),
          ])),
          animateChild()], { optional: true }),

        // Leave Animation
        query(':leave', [
          animate('.8s', keyframes([
            style({ transform: 'scale(0.9)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateX(150em)', offset: 1 }),
          ])),
          animateChild()], { optional: true }),
      ])
    ])
  ]);
