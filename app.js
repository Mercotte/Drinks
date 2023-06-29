// https://www.thecocktaildb.com/api.php
import fetchDrinks from './src/fetchDrinks.js';
import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
// URL pour récupérer la liste de tout les conctails
const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=a';

// récupère et affiche les cocktails
// Evenemenet au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  // Fonction pour l'affichage de conctails ( Appel dans presentDrinks de fetchDrinks , displayDrinks )
  presentDrinks(url);
});
