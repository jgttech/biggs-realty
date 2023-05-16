import './index.css';
import getUnixTime from 'date-fns/getUnixTime';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'views/App';

const MOUNT_ID = `br-chat-plugin-${getUnixTime(new Date())}`;
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
  </BrowserRouter>,
);
