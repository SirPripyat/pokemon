import { ComponentsWrapper } from "../lib/ComponentsWrapper";
import { Pokemons } from "./Pokemons";

interface AllPokemonsSectionProps {}
export function AllPokemonsSection(props: AllPokemonsSectionProps) {
  return (
    <>
      <ComponentsWrapper id={"#pokemons"}>
        <div>
          <h2 className=" text-2xl font-bold">Pokémons</h2>
        </div>
        <Pokemons />
      </ComponentsWrapper>
    </>
  );
}
