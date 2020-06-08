import {home} from '../view/home.js'  
import {menu} from '../view/menu.js'
import {singIn} from '../view/singIn.js'


export const changeRoute = (hash) => {
    if (hash === '#/'){
        return showPages(hash)
    } else if (hash === '#/singIn'){
        return showPages(hash)
    } else  {
        return showPages(hash)
    }
}

export const showPages = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch (hash){
        case '#/':
            containerRoot.appendChild(home());
            break;
        case '#/singIn':
            containerRoot.appendChild(singIn());
            break;
        default:
            containerRoot.innerHTML = `<h2>No existe</h2>`

    }
}