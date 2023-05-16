import type { ParsedPath } from 'path';

export const createCssAssets = (files: ParsedPath[]) => {
  return files.map(({ dir, base }, idx) => {
    const filename = `css_${idx}`;
    const url = dir.split('/').slice(-4).join('/');
    return `
      const ${filename} = document.createElement('link');
      ${filename}.setAttribute('href', \`\${RAW_URL}/${url}/${base}\`);
      ${filename}.setAttribute('rel', 'stylesheet');
    `;
  });
};
