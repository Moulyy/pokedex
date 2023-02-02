import { PokemonService } from './../services/pokemon.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent implements OnInit {
  pokemons : Pokemon[];

  constructor(private _router: Router, private _pokemonService: PokemonService) {}
  
  ngOnInit() {
    this._pokemonService.getPokemons().subscribe((pokemonList) => this.pokemons = pokemonList);
  }

  public goToPokemon(pokemonId : number) {
   this._router.navigate(['pokemon', pokemonId])
  }
}
