import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    name: string = 'Ironman';
    age: number = 45;

    get capitalizedName (): string {
        return this.name.toUpperCase();
    }

    getInfo () {
        return `${this.name} - ${this.age}`;
    }

    changeName () {
        this.name = 'Spiderman';
    }

    changeAge () {
        this.age = 24;
    }
}