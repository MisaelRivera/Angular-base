import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
})
export class CreateCharacterComponent {
  @Input() characterName:string = '';
  @Input() characterPower:number = 0;

  @Output() onCreateCharacter:EventEmitter<Character> = new EventEmitter();  

  createCharacter () {
    const newCharacter: Character = {
      name: this.characterName, 
      power: this.characterPower,
    };
    this.onCreateCharacter.emit(newCharacter);
  }
}
