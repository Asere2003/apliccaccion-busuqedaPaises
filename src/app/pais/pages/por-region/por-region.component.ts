import { Component} from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent  {

  regiones : string[] = [ "africa", "americas", "asia", "europe", "oceania"];
  regionActiva : string = '';
  paises : Contry[] = [];
  error : boolean = false;

  constructor( private paisService : PaisService) { }
  

  getClassCss ( region : string  ) : string {
    return region === this.regionActiva ? 'btn btn-primary mr-1' : 'btn btn-outline-primary mr-1';
  }

  activarRegion ( region: string ) {

    if(this.regionActiva == region) { return; }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion( region ).subscribe( response => {
      this.paises = response;
    } )
    }





 

}
