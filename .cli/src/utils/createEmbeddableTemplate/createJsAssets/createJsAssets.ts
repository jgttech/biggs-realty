import type { ParsedPath } from 'path';

export const createJsAssets = (files: ParsedPath[]) => {
  return files.map(({ dir, base }, idx) => {
    const filename = `js_${idx}`;
    const url = dir.split('/').slice(-4).join('/');
    return `
      const ${filename} = document.createElement('script');
      ${filename}.setAttribute('src', \`\${RAW_URL}/${url}/${base}\`);
      ${filename}.setAttribute('type', 'module');
    `;
  });
};
