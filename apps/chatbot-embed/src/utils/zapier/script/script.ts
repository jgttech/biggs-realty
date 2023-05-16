export const script = () => {
  const element = document.createElement('script');

  element.setAttribute('type', 'module');
  element.setAttribute(
    'src',
    'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
  );

  return element;
};
