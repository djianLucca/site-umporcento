import { trigger, transition, query, style, animate, group, animateChild } from '@angular/animations';

export const borderFader = trigger('fadeBorder',[
  transition('false => true', [
    style({border:'0px solid gray',  boxShadow: '13px 14px 26px -200px rgba(0,0,0,0.74)'}),
    animate('500ms', style({border:'1px solid gray', boxShadow: '13px 14px 26px -11px rgba(0,0,0,0.74)'}))
  ])
])

export const scaler = trigger('scaleIn', [
  transition(':enter', [
      style({ transform: 'scale(0)', opacity: 0 }),
      group([
        animate('380ms', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      query(':enter', animateChild()),
  ])
]);

export const slider =
  trigger('routeAnimations', [
    transition('morningPage => afternoonPage', scaleInOut()),
    transition('afternoonPage => nightPage', scaleInOut()),
    transition('nightPage => afternoonPage', scaleInOut()),
    transition('afternoonPage => morningPage', scaleInOut()),
    transition('nightPage => morningPage', scaleInOut()),
    transition('morningPage => nightPage', scaleInOut()),
    transition('informativePage => morningPage', scaleInOut())
  ]);

  function scaleInOut(){
    const optional = { optional: true };
    return [
      query(':enter, :leave',[
        style({
          position: 'absolute',
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0})
      ]),
      query(':leave', [
        style({ opacity: 1})
      ]),
      group([
        query(':enter', [
          animate('800ms ease-in-out', style({ opacity: 1}))
        ]),
        query(':leave', [
          animate('600ms ease-in-out', style({ opacity: 0}))
        ], optional)
      ])
    ]
  }