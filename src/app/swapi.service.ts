import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Startship } from './startship.model';
import { StartshipList } from './startship-list.model';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  private starshipUrl: string = "https://swapi.dev/api/starships/";

  constructor(public httpClient: HttpClient) {
    this.getAllStarships()
  }

  private getAllStarships() {

  }

  public getFilmDetails(urls: string[]): Observable<Film[]> {

  }
}
