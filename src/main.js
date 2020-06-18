import { menu } from './view/menu.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').innerHTML = menu();

  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
  firebase.auth().onAuthStateChanged(() => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
