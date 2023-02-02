import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './../pokemon';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private _http: HttpClient){}

  /** Retourne la liste des pokémons */
  getPokemons() : Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this._log(response)),
      catchError((error) => this._handleError(error, []))
    );
  }

  /**
   * Retourne un pokémon spécifique
   * @param id Identifiant du pokémon
   */
  getPokemonById(id: number) : Observable<Pokemon | undefined> {
    return this._http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((response) => this._log(response)),
      catchError((error) => this._handleError(error, undefined))
    );
  }

  /** Retourne la liste des différents types de pokémon */
  getPokemonTypeList() : string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy']
  }

  updatePokemon(pokemon: Pokemon) : Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.put('api/pokemons',pokemon, httpOptions).pipe(
      tap((response) => this._log(response)),
      catchError((error) => this._handleError(error, null))
    );
  }

  deletePokemonById(id: number) : Observable<null> {
    return this._http.delete(`api/pokemons/${id}`).pipe(
      tap((response) => this._log(response)),
      catchError((error) => this._handleError(error, undefined))
    );
  }

  private _log(response: any) {
    console.table(response);
  }

  private _handleError(error: Error, errorValue: any ) {
    console.error(error);
    return of(errorValue);
  }
}
