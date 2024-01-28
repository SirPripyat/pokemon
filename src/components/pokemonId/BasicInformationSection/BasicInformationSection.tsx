import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import PokemonTypeChip from "@/components/lib/PokemonTypeChip/PokemonTypeChip";
import usePokemonHasMoreThanOneType from "@/globalHooks/usePokemonHasMoreThanOneType";
import usePokemonTypeStyle from "@/globalHooks/usePokemonTypeStyle";
import Input from "../Input/Input";
import { BrainCircuit, Ruler, Weight } from "lucide-react";
import Title from "@/components/lib/Title";
import PokemonIdSectionWrapper from "../PokemonIdSectionWrapper/PokemonIdSectionWrapper";

export default function BasicInformationSection() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const pokemonTypes = pokemonIdData?.basicInformation?.pokemonTypes ?? [];

  const { thisPokemonHasMoreThanOneType } = usePokemonHasMoreThanOneType({
    pokemonTypes,
  });

  const { firstPokemonTypeStyle, secondPokemonTypeStyle } = usePokemonTypeStyle(
    { pokemonTypes }
  );

  return (
    <>
      {pokemonIdData && (
        <PokemonIdSectionWrapper>
          <div className="flex items-center justify-center gap-3 w-full">
            <h3 className="text-lg text-gray-500">
              {pokemonIdData?.basicInformation?.pokedexNumber}
            </h3>
            <Title>{pokemonIdData?.basicInformation?.name}</Title>
          </div>
          <div>
            <p>{pokemonIdData?.basicInformation?.description}</p>
          </div>
          <div className="flex gap-3">
            <PokemonTypeChip
              type={pokemonTypes[0]}
              color={firstPokemonTypeStyle.color}
              icon={firstPokemonTypeStyle.icon}
            />
            {thisPokemonHasMoreThanOneType && (
              <PokemonTypeChip
                type={pokemonTypes[1]}
                color={secondPokemonTypeStyle.color}
                icon={secondPokemonTypeStyle.icon}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Input
              icon={Weight}
              label="Weight"
              value={`${pokemonIdData?.basicInformation?.weight} kg`}
            />
            <Input
              icon={Ruler}
              label="Height"
              value={`${pokemonIdData?.basicInformation?.height} m`}
            />
            <Input
              icon={BrainCircuit}
              label="Abilities"
              value={`${pokemonIdData?.basicInformation?.abilities.join(", ")}`}
            />
          </div>
        </PokemonIdSectionWrapper>
      )}
    </>
  );
}
