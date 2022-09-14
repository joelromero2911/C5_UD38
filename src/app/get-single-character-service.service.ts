import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSingleCharacterServiceService {

  constructor( private http: HttpClient ) { }

  retornar(id:any){
    return this.http.get("https://rickandmortyapi.com/api/character/" + id);
  }
}
