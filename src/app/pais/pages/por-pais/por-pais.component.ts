import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService  } from '../../services/pais.service';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles : [
    `li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  termino : string = 'Buscar';
  error : boolean = false ; 
  paises: Contry[] = [];
  paisesSugeridos: Contry[] = [];
  mostrarSugeridos : boolean = false;

  constructor( private paisService : PaisService ) { }


  buscar ( termino: string ) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugeridos = false;
    this.paisService.buscarPais( this.termino ).subscribe ( ( paises ) => {
    this.paises = paises;
    }, ( err )  => {
      this.error = true;
      this.paises = [];
    });
  }
  
  sugerencias ( termino : string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugeridos = true;
    this.paisService.buscarPais ( termino ).subscribe(  ( paises ) => {
    this.paisesSugeridos = paises.splice(0,5);
    this.paises = [];
    }, ( err ) => {
      this.paisesSugeridos = [];
    })
  }


}
