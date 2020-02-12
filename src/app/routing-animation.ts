import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

export const fader  =  
    trigger('roureAnimations', [
        transition('Home <=> AddContact' , [
            query(':enter , :leave' , [
                style( {
                    position: 'absolute' ,
                    left : 0,
                    width: '100%' ,
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),

            ]),
            query(':enter',[
                animate('10000s  ease', 
                style({
                    opacity: 1 , transform: 'scale(1) translateY(0)'
                }))
            ])

        ])

    ])