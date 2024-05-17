import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwapiService } from './swapi.service';
import { Startship } from './startship.model';
import { CommonModule } from '@angular/common';
import { Film } from './film.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public starships:Startship[] = [];

  selectedStarship: Startship | null = null;

  films: Film[] = [];

  constructor(public swapiService: SwapiService) {
    this.getStarships()
  }

  public getStarships() {
    
  }

  public async selectStarship(starship: Startship) {
    
  }

  public clearSelection() {

  }
  
}