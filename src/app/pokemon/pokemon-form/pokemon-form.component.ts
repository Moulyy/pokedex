import { PokemonService } from './../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
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
  selectType($event : Event, pokemonType: string) {
    const isChecked : boolean =($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(pokemonType);
    } else {
      this.pokemon.types = this.pokemon.types.filter(type => type !== pokemonType);
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
    this._pokemonService.updatePokemon(this.pokemon).subscribe(() => {
      this._router.navigate(['pokemon', this.pokemon.id]);
    });
  }
}
