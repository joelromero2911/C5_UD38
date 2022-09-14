import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../rickmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor( private rickmortyService: RickmortyService ) { }

  ngOnInit(): void {
    this.rickmortyService.retornar()
    .subscribe(
      result => {
        this.characters = result;
      }
    )
  }

}
