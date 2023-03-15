import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>
        <button 
            (click)="accumulate(base)">
            +{{ base }}
        </button>
        <span>{{ counterValue}}</span>
        <button 
            (click)="accumulate(base * -1)">
            -{{ base }}
        </button>
    `,
})
export class CounterComponent {
    title: string = 'Contador app';
    counterValue: number = 10;
    base: number = 6;

  accumulate (base: number) {
    this.counterValue += base;
  }
}