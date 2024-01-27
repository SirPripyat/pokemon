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

  const { pokemonTypes, pokedexNumber, name, weight, height, abilities } =
    pokemonIdData.basicInformation;

  const { thisPokemonHasMoreThanOneType } = usePokemonHasMoreThanOneType({
    pokemonTypes,
  });

  const { firstPokemonTypeStyle, secondPokemonTypeStyle } = usePokemonTypeStyle(
    { pokemonTypes }
  );

  return (
    <PokemonIdSectionWrapper>
      <div className="flex items-center justify-center gap-3 w-full">
        <h3 className="text-lg text-gray-500">#{pokedexNumber}</h3>
        <Title>{name}</Title>
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
        <Input icon={Weight} label="Weight" value={`${weight} kg`} />
        <Input icon={Ruler} label="Height" value={`${height} cm`} />
        <Input
          icon={BrainCircuit}
          label="Abilities"
          value={`${abilities.join(", ")}`}
        />
      </div>
    </PokemonIdSectionWrapper>
  );
}
