import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  headers: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "b5e0ad6c24msha0b120218a86690p146a69jsn91c64371fa00",
    "useQueryString": "true"
  });

  private options = {
  headers: this.headers
  }

  constructor(private http: HttpClient) { }
  getMovies(char:string): Observable<any>{
    console.log(char, "char")
    const params: HttpParams = new HttpParams().set('character', char);
    return this.http.get<any>(
      'https://rapidapi.p.rapidapi.com/title/auto-complete',
      { ...this.options, params }
    )
  }
}
