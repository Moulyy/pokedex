import { Pokemon } from './../pokemon';
import { Injectable } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';

@Injectable()
export class PokemonService {

  /** Retourne la liste des pokémons */
  getPokemons() : Pokemon[] {
    return POKEMONS;
  }

  /**
   * Retourne un pokémon spécifique
   * @param id Identifiant du pokémon
   */
  getPokemonById(id: number) : Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id === id);
  }

  /** Retourne la liste des différents types de pokémon */
  getPokemonTypeList() : string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy']
  }
}
