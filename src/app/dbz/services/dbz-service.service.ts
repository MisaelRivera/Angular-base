import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable()
export class DbzServiceService {
  private _characters: Character [] = [
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
  constructor() { }

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacter (character: Character) {
    this._characters.push(character);
  }
}
