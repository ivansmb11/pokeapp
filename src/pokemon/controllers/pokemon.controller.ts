import { Controller, Get, Param } from "@nestjs/common";
import { PokemonService } from "../services/pokemon.service";

@Controller("pokemon")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // Obtain Pokemon by name ✅
  // Obtain Pokemon by ID ✅
  // Obtain Pokemon by type ✅
  // Obtain all Pokemon names
  // Obtain Pokemon by generation: Pokemon de Kanto -> 1 - 151 Poken Hoen ->

  @Get("/:name")
  async getPokemonByName(@Param("name") name: string) {
    return await this.pokemonService.getPokemonByName(name);
  }

//   @Get("/by-id/:id")
//   async getPokemonById(@Param("id") id: string) {
//     return await this.pokemonService.getPokemonById(id);
//   }

  @Get('/type/:type')
  async getPokemonByType(@Param('type') type: string) {
    return await this.pokemonService.getPokemonByType(type);
  }
}
