import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Contry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http : HttpClient ) { }

  get httpParams () :  HttpParams{
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }



  buscarPais( termino : string ) : Observable<Contry[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    console.log (url);
    return this.http.get<Contry[]> ( url, { params : this.httpParams });

  }

  buscarCapital( termino : string ) : Observable<Contry[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    console.log (url);
    return this.http.get<Contry[]> ( url,  { params : this.httpParams });

  }

  getPaisPorAlpha ( id : string ) : Observable<Contry> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    console.log (url);
    return this.http.get<Contry> ( url );

  }

  buscarRegion ( id : string ) : Observable<Contry[]>{
    const url = `${ this.apiUrl }/region/${ id }`;
    console.log (url);
    return this.http.get<Contry[]> ( url ,  { params : this.httpParams });

  }

}
