import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceService } from '../services/dbz-service.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
})
export class CreateCharacterComponent {
  @Input() characterName:string = '';
  @Input() characterPower:number = 0;  

  constructor ( private dbzService: DbzServiceService ) {}
  
  createCharacter () {
    const newCharacter: Character = {
      name: this.characterName, 
      power: this.characterPower,
    };
    this.dbzService.addCharacter(newCharacter);
  }
}
