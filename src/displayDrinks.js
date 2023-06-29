import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

// rempli le section et title avec la liste de conctail
const displayDrinks = async ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');

  if (!drinks) {
    // cache le chargement
    hideLoading();
    title.textContent = 'pas de drink trouvé, veuillez refaire une recherche';
    section.innerHTML = null;

    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');

  // cache le chargement
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;

  return section;
};

export default displayDrinks;
