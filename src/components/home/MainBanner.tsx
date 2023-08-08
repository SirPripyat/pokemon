import Image from "next/image";
import { ComponentsWrapper } from "../lib/ComponentsWrapper";
import { ButtonFilled } from "../lib/buttons/ButtonFilled";
import pokeball from "../../../public/pokeball-image.png";

export function MainBanner() {
  return (
    <>
      <ComponentsWrapper
        className={"relative bg-red-800 md:flex-row md:justify-between"}
      >
        <div className="flex flex-col items-center gap-6 md:w-1/2">
          <h1 className="text-3xl text-center">
            <span className="font-bold">Encontre</span> todos os seus{" "}
            <span className="font-bold">Pokémons</span> favoritos
          </h1>
          <ButtonFilled.Root link="#pokemons">Ver pokémons</ButtonFilled.Root>
        </div>
        <Image
          className="w-full h-auto z-10 sm:w-1/2 md:w-1/3 lg:w-1/4"
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          }
          alt="Charmander"
          width={300}
          height={300}
        />
        <Image
          className="w-full h-auto absolute bottom-0 right-0 z-0 sm:w-1/2 lg:w-1/3"
          src={pokeball}
          alt="Raichu"
          width={300}
          height={300}
        />
      </ComponentsWrapper>
    </>
  );
}
