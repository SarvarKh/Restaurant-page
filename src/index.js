import navbarLoad from './navbar';
import pageLoad from './home';

function component() {
  const element = document.createElement('div');
  element.appendChild(navbarLoad());
  element.appendChild(pageLoad());

  return element;
}

document.body.appendChild(component());