import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class PokemonService {
  constructor() {}

  readonly BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  async getPokemonByName(name: string) {
    const response = await axios.get(`${this.BASE_URL}/${name}`);
    if (response.status === 200) {
      return response.data.name;
    } else {
      return "Pokemon not found";
    }
  }

  async getPokemonById(id: string) {
    const response = await axios.get(`${this.BASE_URL}/${id}`);
    if (response.status === 200) {
      return response.data.name;
    } else {
      return "Pokemon not found";
    }
  }

  async getPokemonByType(type: string) {
    const pokemon = [];
    for (let id = 1; id < 152; id++) {
      const response = await axios.get(`${this.BASE_URL}/${id}`);
      response.data.types.forEach((t) => {
        if (t.type.name === type) {
          pokemon.push(response.data.name);
        }
      });
    }
    if (pokemon.length === 0) {
      return "No existen pokemon con ese tipo.";
    } else {
      return pokemon;
    }
  }
}
