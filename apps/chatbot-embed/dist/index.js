
    document.addEventListener('DOMContentLoaded', () => {
      const body = document.getElementsByTagName('body')[0];
      const head = document.getElementsByTagName('head')[0];
      const RAW_URL = `https://rawcdn.githack.com/jgttech/biggs-realty/1.1.10`;
      
      const css_0 = document.createElement('link');
      css_0.setAttribute('href', `${RAW_URL}/apps/chatbot-embed/dist/assets/index-52251833.css`);
      css_0.setAttribute('rel', 'stylesheet');
    
      
      const js_0 = document.createElement('script');
      js_0.setAttribute('src', `${RAW_URL}/apps/chatbot-embed/dist/assets/index-10b1c4ad.js`);
      js_0.setAttribute('type', 'module');
    
      head.appendChild(css_0);

      setTimeout(() => {
        body.appendChild(js_0);
      }, 0);
    });
  