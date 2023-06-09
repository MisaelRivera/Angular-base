import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { DbzServiceService } from './services/dbz-service.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CreateCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],

  providers: [
    DbzServiceService,
  ]
})
export class DbzModule { }
