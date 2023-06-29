import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  //* réccupérer les cocktails au formayt json
  const data = await fetchDrinks(url);

  //* afficher les cocktails avec en paramètre la liste de contails sous format JSON
  // J'appel la foonction displayDrinks
  const section = await displayDrinks(data);
  // ajoutet un evenement sur la section et stocket l'Id dans le local storage
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;

// affiche les cocktails
// récupère les cocktails
