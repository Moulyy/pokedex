import { PokemonService } from './../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styles: [
  ]
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(private _activatedRoute: ActivatedRoute, private _pokemonService: PokemonService) {}

  ngOnInit() {
    const pokemonId: string|null = this._activatedRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this._pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }
}
