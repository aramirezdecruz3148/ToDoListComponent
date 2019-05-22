import App from './components/App.js';

const app = new App();
const appDOM = app.render();

const root = document.getElementById('app');
console.log(root);
root.appendChild(appDOM);
