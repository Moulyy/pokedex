import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinct, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
})
export class PokemonSearchComponent implements OnInit {
  /** Flux de données dans le temps avec les recherches de l'utilisateur : {..."a"... "ab"..."abz"..."ab"..."abc"} */
  searchTerms = new Subject<string>();
  // {...pokemonList(a)... pokemonList(ab)... pokemonList(abc)}
  pokemons$ : Observable<Pokemon[]>

  constructor(private _pokemonService: PokemonService, private _router: Router) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a"... "ab"."abz"..."ab"..."abc"}
      debounceTime(300),
      // {..."ab"... "ab"... "abc".....}
      distinctUntilChanged(),
      // {..."ab".... "abc".....}
      switchMap((term) => this._pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    // a chaque fois que l'utilisateur fait une recherche, on pousse sa recherche dans this.searchTerms
    this.searchTerms.next(term);
  }

  gotoDetail(pokemonId: number) {
    this._router.navigate(['pokemon', pokemonId]);
  }
}
  
