import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import { Person, Planet } from "./types";
import axios from "axios";


@Resolver()
export class CharacterResolver {
  // List some people on a page.
  @Query(() => [Person])
  async peoplebyPage(@Arg("pageNumber") pageNumber: number) {
    
    const res = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    return res.data.results;
  }
  // Search specific person by name.
  @Query(() => [Person])
  async peopleByName(@Arg("name") name: string) {
    const res = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
    return res.data.results;
  }
  
}

@Resolver()
export class PlanetResolver {
  // All planets.
  @Query(() => [Planet])
  async planets() {
    const res = await axios.get("https://swapi.dev/api/planets/");
    return res.data.results;
  }
}
// @Resolver()
// export class HomeWorlds {
//   // All planets.
//   @Query(() => [Person])
//   async planets() {
//     const res = await axios.get(parent.homeworld);
//     return res.data.results;
//   }
// }
