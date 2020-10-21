import { Component, ElementRef, OnInit } from '@angular/core';
import { AutoCompleteService } from '../auto-complete.service';
import { IResponse } from '../IResponse';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})

export class AutoCompleteComponent implements OnInit {
  movies$ : Array<any>
  private searchTerms = new Subject<string>();

  isVisible:boolean = false;
  model:string="";

  constructor(private autoCompleteService : AutoCompleteService, private _eref: ElementRef) { }

  ngOnInit(){
    this.searchTerms.pipe(
      // wait 50ms after each keystroke before considering the term
      debounceTime(50),
      switchMap((term: string) => this.autoCompleteService.getMovies(term)
    )).subscribe((res : IResponse) => {
      this.movies$ = res.d;  
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.isVisible=true;
   }

}
