import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/component/bar-app';
import './views/component/hero-app';
import './views/component/footer-app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

function addEventListenerIfNotNull(element, event, callback) {
  if (element) {
    element.addEventListener(event, callback);
  } else {
    console.error(`Error: Element is null for event '${event}'.`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const skipToContent = document.querySelector('.skip-link');
  const mainContent = document.querySelector('#mainContent');

  const app = new App({
    button: document.querySelector('.menu-button'),
    drawer: document.querySelector('#nav'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

  addEventListenerIfNotNull(skipToContent, 'click', (event) => {
    event.preventDefault();
    addEventListenerIfNotNull(mainContent, 'focus', () => {
      mainContent.focus();
    });
  });

  console.log('skipToContent:', skipToContent);
  console.log('mainContent:', mainContent);
});
