import { useState, useEffect } from "react";

const usePersonajePokemon = (personajePokemon) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!personajePokemon) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${personajePokemon}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [personajePokemon]);
  return { pokemon };
};

const usePersonajeRickMorty = (personajeRM) => {
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    if (!personajeRM) return;

    fetch(`https://rickandmortyapi.com/api/character/?name=${personajeRM}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data.results);
      });
  }, [personajeRM]);
  return { personaje };
};

export { usePersonajePokemon, usePersonajeRickMorty };
