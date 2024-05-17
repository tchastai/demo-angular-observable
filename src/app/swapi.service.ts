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

  public starshipsObserver : BehaviorSubject<Startship[]> = new BehaviorSubject<Startship[]>([]);
  
  private starshipUrl: string = "https://swapi.dev/api/starships/";

  constructor(public httpClient: HttpClient) {
    this.getAllStarships()
  }

  private getAllStarships() {
    this.httpClient.get<StartshipList>(this.starshipUrl)
      .subscribe(response => {
        if(response.results) {
          this.starshipsObserver.next(response.results);
        }
      }, error => {
        console.error('Error fetching starships', error);
      });
  }

  public getFilmDetails(urls: string[]): Observable<Film[]> {
    const requests = urls.map(url => this.httpClient.get(url));
    return forkJoin(requests);
  }
}
