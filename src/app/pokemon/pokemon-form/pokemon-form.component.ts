import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {
  pokemonTypes : string[];
  pokemon: Pokemon;

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonTypes = this._pokemonService.getPokemonTypeList();
  }

  /** Le pokémon en train d'être éditer possède t-il le type passé en paramètre  */
  hasType(type: string) : boolean {
    return true;
  }

  /** Ajoute un type à la liste des types du pokémon ou le retire si le type est déjà présent */
  selectType() {

  }

  /** Soumission du formulaire */
  onSubmit() {

  }
}
