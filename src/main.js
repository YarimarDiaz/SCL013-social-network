import { menu } from './view/menu.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').innerHTML = menu();
  changeRoute(window.location.hash);

  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
