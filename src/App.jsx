import { useState } from 'react';
import { usePersonajePokemon, usePersonajeRickMorty } from "./hooks/useFecthCharacters";
import './App.css';

function App() {

  const [pokemonNombre, setPokemonNombre] = useState("");
  const [personajeNombre, setPersonajeNombre] = useState("");

  const { pokemon } = usePersonajePokemon(pokemonNombre);
  const { personaje } = usePersonajeRickMorty(personajeNombre);

   return (
    <>
      <h1>Buscador de personajes</h1>

      <hr />

      <h2>Buscar Pokémon</h2>

      <input
        type="text"
        placeholder="Nombre del pokemon"
        onChange={(e) => setPokemonNombre(e.target.value.toLowerCase())}
      />

      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} />
        </div>
      )}

      <hr />

      <h2>Buscar personaje Rick & Morty</h2>

      <input
        type="text"
        placeholder="Nombre del personaje"
        onChange={(e) => setPersonajeNombre(e.target.value)}
      />

      {personaje &&
        personaje.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <img src={p.image} />
          </div>
        ))}
    </>
  );
}

export default App;
