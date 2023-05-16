import type { ParsedPath } from 'path';
import { createCssAssets } from './createCssAssets';
import { createJsAssets } from './createJsAssets';

type EmbeddableConfig = {
  version: string;
  baseUrl: string;
  user: string;
  project: string;
  files: ParsedPath[];
};

export const createEmbeddableTemplate = (config: EmbeddableConfig) => {
  const { version, baseUrl, user, project, files } = config;
  const cssAssets = files.filter(({ ext }) => ext === '.css');
  const jsAssets = files.filter(({ ext }) => ext === '.js');
  const cssFiles = cssAssets.map((_, idx) => `css_${idx}`);
  const jsFiles = cssAssets.map((_, idx) => `js_${idx}`);

  const content = `
    document.addEventListener('DOMContentLoaded', () => {
      const body = document.getElementsByTagName('body')[0];
      const head = document.getElementsByTagName('head')[0];
      const RAW_URL = \`${baseUrl}/${user}/${project}/${version}\`;
      ${createCssAssets(cssAssets)}
      ${createJsAssets(jsAssets)}
      ${cssFiles.map(v => `head.appendChild(${v});`).join('\n')}

      setTimeout(() => {
        ${jsFiles.map(v => `body.appendChild(${v});`).join('\n')}
      }, 0);
    });
  `;

  return content;
};
