import { showLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  showLoading();
  // Bloc de traitemenent
  try {
    // Récuperer la réponse de l'appel GET
    const response = await fetch(url);
    // je récupère le JSON dans la réponse
    const data = await response.json();
    return data;
    // si j'ai un erreur je capte l'erreur et je fais un console log
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;

// montre le chargement
// récupère les cocktails

// if (!response.ok) {
//   throw new Error(`HTTP response error: ${response.status}`);
