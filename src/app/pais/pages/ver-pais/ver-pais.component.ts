import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Contry;
  error : boolean = false ; 

  constructor( 
    private activatedRoute : ActivatedRoute , 
    private paisService : PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.paisService.getPaisPorAlpha ( id )),
      tap(  console.log )
    )
    .subscribe( pais => {
      this.pais = pais}
      ,(err) => {
        this.error = true;
      })
    /* this.activatedRoute.params
      .subscribe( ({ id  }) => {
        console.log( id );
        this.paisService.getPaisPorAlpha( id ).subscribe( pais => {
          console.log( pais );
        } )
    } ) */

  }

}
