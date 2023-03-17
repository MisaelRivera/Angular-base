import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzServiceService } from '../services/dbz-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  get characters (): Character [] {
    return this.dbzService.characters;
  } 

  constructor ( private dbzService: DbzServiceService ) {}
}
