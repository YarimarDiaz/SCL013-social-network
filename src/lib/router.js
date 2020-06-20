/* eslint-disable quotes */
import { home } from '../view/home.js';
import { singIn } from '../view/singIn.js';
import { profile } from '../view/profile.js';
import { knowUs } from '../view/knowUs.js';


export const showPages = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '': containerRoot.appendChild(home());
      break;
    case '#/': containerRoot.appendChild(home());
      break;
    case '#/singIn': containerRoot.appendChild(singIn());
      break;
    case '#/profile': containerRoot.appendChild(profile());
      break;
    case '#/knowUs': containerRoot.appendChild(knowUs());
      break;
    default:
      containerRoot.innerHTML = `<h2>'No existe'</h2>`;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showPages(hash);
  } if (hash === '#/singIn') {
    return showPages(hash);
  } if (hash === '#/profile') {
    return showPages(hash);
  } if (hash === '#/knowUs') {
    return showPages(hash);
  }
  return showPages(hash);
};
