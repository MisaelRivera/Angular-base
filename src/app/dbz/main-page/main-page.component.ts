import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characterName:string = '';
  characterPower:number = 0;
  characters: Character [] = [
    {
      name: 'Krillin',
      power: 700,
    },
    {
      name: 'Goku',
      power: 15500,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
    
  ];

  addCharacter (event: Character) {
    this.characters.push(event);
  }
}
