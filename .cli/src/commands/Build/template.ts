import type { ParsedPath } from 'path';

type Config = {
  version: string;
  baseUrl: string;
  user: string;
  project: string;
  files: ParsedPath[];
};

export const template = (config: Config) => {
  const { version, baseUrl, user, project, files } = config;
  let content = `const RAW_URL = \`${baseUrl}/${user}/${project}/${version}\`;`
  const cssAssets = files.filter(({ ext }) => ext === '.css');
  const jsAssets = files.filter(({ ext }) => ext === '.js');

  // const assets = files.map(({ base, dir, ext }, idx) => {
  //   const filename = `file_${idx}`;
  //   const element = `${filename}_element`;
  //   const isScript = ext === '.js';
  //   const isStyle = ext === '.css';
  //   let variable = `const ${filename} = \`\${RAW_URL}/${dir.split('/').slice(-2).join('/')}/${base}\`;`;

  //   if (isScript) {
  //     variable += `
  //       const ${element} = document.createElement('script');
  //     `;
  //   }

  //   if (isStyle) {
  //     variable += `
  //       const ${element} = document.createElement('link');
  //     `;
  //   }

  //   return variable;
  // });

  return content.split('\n').map(s => s.trim()).join('\n');
};
