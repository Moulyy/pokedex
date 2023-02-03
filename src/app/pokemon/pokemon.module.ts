import { PokemonService } from './services/pokemon.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

const pokemonRoutes: Routes = [
  {path: 'pokemon/edit/:id', component: PokemonEditComponent},
  {path: 'pokemon/add', component: PokemonAddComponent},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent}
]

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormComponent,
    PokemonEditComponent,
    PokemonAddComponent,
    PokemonSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
