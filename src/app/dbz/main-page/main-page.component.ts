import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceService } from '../services/dbz-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  
  characterName:string = '';
  characterPower:number = 0;
  characters: Character[] = [];

  constructor (private dbzService: DbzServiceService){}

  ngOnInit(): void {
    this.characters = this.dbzService.characters;
  }

  

}
