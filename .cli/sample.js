const RELEASE_VERSION = '0.0.12';
const RAW_URL = `https://rawcdn.githack.com/jgttech/br-skunkworks-chat/${RELEASE_VERSION}/lib/assets`;
const STYLES_URL = `${RAW_URL}/index-84f50569.css`;
const SCRIPT_URL = `${RAW_URL}/index-f9ec5576.js`;

document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementsByTagName('head')[0];
  const head = document.getElementsByTagName('head')[0];
  const styles = document.createElement('link');
  const script = document.createElement('script');

  // Create the styles tag.
  styles.setAttribute('href', STYLES_URL);
  styles.setAttribute('rel', 'stylesheet');

  // Create the script tag.
  script.setAttribute('src', SCRIPT_URL);
  script.setAttribute('type', 'module');

  head.appendChild(styles);

  setTimeout(() => {
    body.appendChild(script);
  }, 0);
});
