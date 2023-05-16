import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'views/App';

const MOUNT_ID = 'biggs-realty-chatbot-embed';
const hasMount = document.getElementById(MOUNT_ID);
const body = document.getElementsByTagName('body')[0];
const root = document.createElement('div');

// Add the mount ID.
root.setAttribute('id', MOUNT_ID);

if (!hasMount) {
  body.appendChild(root);
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
