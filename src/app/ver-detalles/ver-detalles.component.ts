import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetSingleCharacterServiceService } from '../get-single-character-service.service';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  id:any;
  character:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private getSingleCharacterServiceService: GetSingleCharacterServiceService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });

    this.getSingleCharacterServiceService.retornar(this.id)
    .subscribe(
      result => {
        this.character = result;
      }
    )
  }

}
