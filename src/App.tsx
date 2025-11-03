import { useState, useEffect } from "react";
import superHeros from "./superHeros.json";

function App() {
  // Déclaration d'un état compteur, initialisé à 0
  const [compteur, setCompteur] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fonction pour incrémenter
  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  // Fonction pour réinitialiser
  const reinitialiser = () => {
    setCompteur(0);
  };

  // useEffect pour mettre à jour le titre à chaque changement du compteur
  useEffect(() => {
    document.title = `Compteur : ${compteur}`;
  }, [compteur]); // le tableau de dépendances contient compteur

  const superHerosFiltres = superHeros.filter((hero) =>
hero.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bonjour Toto, je découvre React !</h1>
      <h2>Compteur : {compteur}</h2>

      <button onClick={incrementer} style={{ marginRight: "10px" }}>
        +
      </button>

      <button onClick={reinitialiser}>Réinitialiser</button>

      <h3>Il y a {superHeros.length} super-héros dans la base</h3>

      <input type="text"
      placeholder="Rechercher un super-héros..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{marginBottom: "20px", padding: "5px", width:"200px"}}
      />

      <ul style={{listStyleType: "none", padding: 0}}>
        {superHerosFiltres.map((hero) => (
            <li key={hero.id} style={{margin: "5px 0"}}>
                {hero.name}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;