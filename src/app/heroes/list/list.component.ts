import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  deletedHero: string = '';

  deleteHero () {
    this.deletedHero = this.heroes.pop() || '';
  }
}
