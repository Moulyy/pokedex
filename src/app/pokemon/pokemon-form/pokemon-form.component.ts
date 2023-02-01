import { PokemonService } from './../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon;
  types : string[];
  oldPokemon: Pokemon;
  
  constructor(private _pokemonService: PokemonService, private _router: Router) {}

  ngOnInit(): void {
    this.types = this._pokemonService.getPokemonTypeList();
    this.oldPokemon = {...this.pokemon};
  }

  /** Le pokémon en train d'être éditer possède t-il le type passé en paramètre  */
  hasType(type: string) : boolean {
    return this.pokemon.types.includes(type);
  }

  /** Ajoute un type à la liste des types du pokémon ou le retire si le type est déjà présent */
  selectType($event : Event, type: string) {
    const isChecked : boolean =($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      this.pokemon.types = this.pokemon.types.filter(type => type !== type);
    }
  }

  /** Empêche un pokemon d'avoir moins de 1 type ou plus de 3 types */
  isTypesValid(type: string) : boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  /** Soumission du formulaire */
  onSubmit() {
    console.log('Soumission du formulaire');
    this._router.navigate(['pokemons', this.pokemon.id]);
  }
}
