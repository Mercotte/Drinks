const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // pas besoin de JSON.stringify car id est déjà un string
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
