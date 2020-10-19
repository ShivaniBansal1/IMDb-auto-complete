import { Component } from '@angular/core';
import { AutoCompleteService } from '../auto-complete.service';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {

  constructor(private autoCompleteService : AutoCompleteService) { }

  getMovies(event){
    // console.log("inside function", event.target.value)
    let moviesList = this.autoCompleteService.getMovies(event.target.value)
    console.log(moviesList, "movies")
  }
}
