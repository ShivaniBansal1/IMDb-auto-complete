import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  IMDB_URL = "https://rapidapi.p.rapidapi.com/title/auto-complete"

  headers: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "6347e89982msh307f462de939cdcp18874ejsnf576ad9a5010",
    "useQueryString": "true"
  });

  private options = {
  headers: this.headers
  }

  constructor(private http: HttpClient) { }
  getMovies(char:string){
    return this.http.get(
      `${this.IMDB_URL}?q=${char}`,
      this.options
    )
  }
}
