import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [
  ]
})
export class PokemonDetailComponent implements OnInit {
  
  pokemons: Pokemon[];
  pokemon?: Pokemon;

  constructor(private _route: ActivatedRoute, private _router: Router, private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this._pokemonService.getPokemons();
    const pokemonId: string|null = this._route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this._pokemonService.getPokemonById(+pokemonId);
    }
  }

  // Redirection vers la page des pokémons
  goToPokemonList() {
    this._router.navigate(['/pokemons']);
  }
}
