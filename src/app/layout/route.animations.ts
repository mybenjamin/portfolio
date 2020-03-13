import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [

      // Animate entering element
      query(':enter', [
        style({ opacity: 0 }),
        animate('.5s', style({ opacity: 1 })),
        animateChild()],
        { optional: true }
      ),

      // Animate the exiting element
      // Can group to play animation in paralell
      query(':leave', [
        animate('.5s', style({ opacity: 0 })),
        animateChild()],
        { optional: true }
      ),
    ]),
  ]);
