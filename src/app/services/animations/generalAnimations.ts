import { trigger, transition, query, style, animate, group } from '@angular/animations';

export const scaler = trigger('myTest', [
  transition(':enter', [
      style({ transform: 'scale(0)' }),
      animate('2s', style({ transform: 'scale(1)' }))
  ]),
  transition(':leave', [
      style({ transform: 'scale(1)' }),
      animate('2s', style({ transform: 'scale(0)' }))
  ])
]);

export const slider =
  trigger('routeAnimations', [
    transition('morningPage => afternoonPage', slideTo('right')),
    transition('afternoonPage => nightPage', slideTo('right')),
    transition('nightPage => afternoonPage', slideTo('left')),
    transition('afternoonPage => morningPage', slideTo('left')),
    transition('nightPage => morningPage', slideTo('left')),
    transition('morningPage => nightPage', slideTo('right')),
    transition('informativePage => morningPage', slideTo('right'))
  ]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%'}))
        ])
      ])
    ];
  }
