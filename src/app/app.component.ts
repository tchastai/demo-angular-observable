import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwapiService } from './swapi.service';
import { Startship } from './startship.model';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
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
    console.log("[getStarships] Start method")
    this.swapiService.starshipsObserver.subscribe({
      next: (starships: Startship[]) => {
        console.log("[Starships] = ", starships)
        this.starships = starships;
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  public async selectStarship(starship: Startship) {
    this.selectedStarship = starship;
    if (starship.films && starship.films.length > 0) {
      this.films = await lastValueFrom(this.swapiService.getFilmDetails(starship.films));
    } else {
      this.films = [];
    }
  }

  public clearSelection() {
    this.selectedStarship = null;
    this.films = [];
  }
  
}