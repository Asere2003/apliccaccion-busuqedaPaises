import { Component, OnInit } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService  } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent  {

  termino : string = 'Buscar';
  error : boolean = false ; 
  paises: Contry[] = [];
  titulo : string = 'Buscar Capital';

  constructor( private paisService : PaisService ) { }

  buscar ( termino: string ) {

    this.error = false;

    this.termino = termino;


    this.paisService.buscarCapital( this.termino ).subscribe ( ( paises ) => {
      
    this.paises = paises;

    }, ( err )  => {

      this.error = true;
      this.paises = [];
    });


  }

  sugerencias ( termino : string) {
    
    this.error = false;
    
  }

}
