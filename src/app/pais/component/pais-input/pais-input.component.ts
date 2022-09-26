import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { PorCapitalComponent } from '../../pages/por-capital/por-capital.component';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit  {

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = '';

  constructor() {}
  

  debouncer: Subject<string> = new Subject();

  termino : string = '';

  buscar(  ) {
    this.onEnter.emit( this.termino );
  }


  ngOnInit(): void {
    this.debouncer
      .pipe( debounceTime (300) )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
    } )
  }

  teclaPresionada (  ) {
    
    this.debouncer.next(this.termino);

  }




}